import '@testing-library/jest-dom'

import { act, fireEvent, render, screen } from '@testing-library/react'

import { Select } from './Select'
const genreOptions = [
  { title: 'درام', value: 'drama' },
  { title: 'اکشن', value: 'action' },
  { title: 'کمدی', value: 'comedy' },
  { title: 'علمی تخیلی', value: 'sci-fi' },
]

describe('render Select', () => {
  it('renders a Select label', () => {
    render(<Select label="ژانر" options={genreOptions} columns={2} />)
    const loadingElement = screen.getByText('ژانر')
    expect(loadingElement).toBeInTheDocument()
  })
})

describe('open select', () => {
  it('open select', () => {
    render(<Select label="ژانر" options={genreOptions} columns={2} />)

    act(() => fireEvent.click(screen.getByTestId('select')))
    const loadingElement = screen.getByText('اکشن')
    expect(loadingElement).toBeInTheDocument()
  })
})

describe('select option', () => {
  it('select option and call onChange', () => {
    const onChange = jest.fn()
    render(<Select label="ژانر" options={genreOptions} columns={2} onChange={onChange} />)

    act(() => fireEvent.click(screen.getByTestId('select')))
    act(() => fireEvent.click(screen.getByText('اکشن')))
    const loadingElement = screen.getByText('اکشن')
    expect(loadingElement).toBeInTheDocument()
    expect(onChange).toHaveBeenCalled()
  })
})
