import { useEffect, useRef } from 'react'

import { ListItem } from './ListItem'
import { ListProps } from './type'

export const List = (props: ListProps) => {
  const { options, columns, onSelectedChange, multi, selectedValue, onClose } = props
  const wrapperRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current !== event.target) {
        onClose?.()
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div
      ref={wrapperRef}
      className="w-[350px] max-h-[250px] overflow-y-auto absolute bg-black-list text-white border-solid border border-black-border rounded-md px-2 py-4 mt-2 grid gap-2 "
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {options.map(option => (
        <ListItem
          key={option.value}
          onSelectedChange={onSelectedChange}
          title={option.title}
          value={option.value}
          selectedValue={selectedValue}
          multi={multi}
        />
      ))}
    </div>
  )
}
