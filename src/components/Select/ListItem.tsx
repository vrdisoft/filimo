import { CheckBox } from '../CheckBox'
import { ListItemProps } from './type'

export const ListItem = (props: ListItemProps) => {
  const { title, onSelectedChange, multi, value, selectedValue } = props
  const checked = multi ? (selectedValue as string[])?.some(item => item === value) : value === selectedValue

  return (
    <div
      className="h-[40px] flex items-center hover:bg-black-hover hover:rounded-md px-2"
      key={value}
      onClick={e => {
        e.nativeEvent.stopImmediatePropagation()
      }}
    >
      <CheckBox lable={title} onChange={checked => onSelectedChange?.(value, checked)} checked={checked} />
    </div>
  )
}
