'use client'
import { useEffect, useMemo, useState } from 'react'
import { FaSortDown, FaSortUp } from 'react-icons/fa'

import { List } from './list'
import { SelectProps } from './type'

export const Select = (props: SelectProps) => {
  const { label, options, columns, multi, value, onChange } = props
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedValue, setSelectedValue] = useState<string | string[]>(multi ? [] : '')

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleOnChange = (value: string, checked: boolean) => {
    if (multi) {
      if (checked) {
        setSelectedValue(prevState => {
          const newState = [...(prevState as string[]), value]
          onChange?.(newState)
          return newState
        })
      } else {
        setSelectedValue(prevState => {
          const newState = (prevState as string[]).filter(item => item !== value)
          onChange?.(newState)
          return newState
        })
      }
    } else if (checked) {
      setSelectedValue(value)
      onChange?.(value)
      handleClose()
    } else {
      setSelectedValue('')
      onChange?.('')
    }
  }

  useEffect(() => {
    if (multi) {
      setSelectedValue(value ? [...(value as string[])] : [])
    } else {
      setSelectedValue(value as string)
    }
  }, [value, multi])

  const objOptions = useMemo(() => {
    const obj: { [key: string]: string } = {}
    options.forEach(item => (obj[item.value] = item.title))
    return obj
  }, [options])

  const selectLabel = useMemo(() => {
    if (selectedValue?.length > 0) {
      if (multi) {
        return (selectedValue as string[])?.reduce(
          (prevValue, item, index) => (index > 0 ? `${prevValue} - ${objOptions[item]}` : objOptions[item]),
          '',
        )
      }

      return objOptions[selectedValue as string]
    }

    return label
  }, [label, selectedValue, multi, objOptions])

  const borderColor = selectedValue?.length > 0 ? 'border-orange-300' : 'border-gray-400'

  return (
    <div className="relative">
      <div
        className={`w-[350px] h-[45px]  bg-zinc-800 text-white border-solid border  rounded-md flex justify-between items-center px-2 ${borderColor}`}
        onClick={handleOpen}
        data-testid="select"
      >
        {selectLabel}
        {isOpen ? <FaSortUp className="text-gray-400" /> : <FaSortDown className="text-gray-400" />}
      </div>
      {isOpen && (
        <List
          options={options}
          multi={multi}
          columns={columns}
          onSelectedChange={handleOnChange}
          selectedValue={selectedValue}
          onClose={handleClose}
        />
      )}
    </div>
  )
}
