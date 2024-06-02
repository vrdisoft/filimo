export type option = {
  title: string
  value: string
}
export type SelectProps = {
  lable: string
  options: option[]
  columns: number
  multi?: boolean
  value?: string | string[]
}

export type ListProps = Omit<SelectProps, 'lable' | 'value'> & {
  selectedValue?: string | string[]
  onSelectedChange: (value: string, checked: boolean) => void
  onClose: () => void
}

export type ListItemProps = Omit<ListProps, 'onClose' | 'columns' | 'options'> & {
  value: string
  title: string
}
