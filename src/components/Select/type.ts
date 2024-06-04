export type option = {
  title: string
  value: string
}
export type SelectProps = {
  label: string
  options: option[]
  columns: number
  multi?: boolean
  value?: string | string[]
  onChange?: (value: string | string[]) => void
}

export type ListProps = Omit<SelectProps, 'label' | 'value'> & {
  selectedValue?: string | string[]
  onSelectedChange: (value: string, checked: boolean) => void
  onClose: () => void
}

export type ListItemProps = Omit<ListProps, 'onClose' | 'columns' | 'options'> & {
  value: string
  title: string
}
