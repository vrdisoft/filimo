import '@testing-library/jest-dom'

import { act, fireEvent, render, screen } from '@testing-library/react'

import { CheckBox } from './CheckBox'

describe('render checkbox', () => {
  it('renders a checkbox label', () => {
    render(<CheckBox label="checkbox label" checked={false} />)
    const loadingElement = screen.getByText('checkbox label')
    expect(loadingElement).toBeInTheDocument()
  })
})

describe('render checked', () => {
  it('render checked to checkbox', () => {
    render(<CheckBox label="checkbox label" checked={true} />)
    const loadingElement = screen.getByTestId('checked')
    expect(loadingElement).toBeInTheDocument()
  })
})

describe('call onChange', () => {
  it('call onChange after click', () => {
    const onChange = jest.fn()
    render(<CheckBox label="checkbox label" checked={false} onChange={onChange} />)

    act(() => fireEvent.click(screen.getByTestId('checkboxInput')))
    expect(onChange).toHaveBeenCalled()
  })
})
