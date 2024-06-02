'use client'
import { ChangeEvent } from 'react'
import { FaCheck } from 'react-icons/fa'

import { CheckBoxProps } from './type'

export const CheckBox = (props: CheckBoxProps) => {
  const { lable, onChange, checked } = props
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked)
  }

  const onLabelClick = (e: React.MouseEvent<HTMLElement>) => {
    e.nativeEvent.stopImmediatePropagation()

    onChange?.(!checked)
  }

  return (
    <div className="flex items-center flex-row-reverse gap-3">
      <input type="checkbox" className="opacity-0 absolute h-8 w-8" onChange={handleOnChange} checked={checked} />
      <div className="border-2 rounded-md border-gray-300 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-orange-300">
        <FaCheck className="hidden w-3 h-3 text-orange-300" />
      </div>
      <label className="select-none text-white" onClick={onLabelClick}>
        {lable}
      </label>
    </div>
  )
}