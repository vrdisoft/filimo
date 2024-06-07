// @ts-nocheck

import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import { Filter } from './Filter'

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    }
  },
}))

describe('render Filter', () => {
  it('renders Filter', () => {
    render(<Filter slug={[]} />)
    const genreElement = screen.getByText('ژانر')
    const rateElement = screen.getByText('امتباز فیلم')
    expect(genreElement).toBeInTheDocument()
    expect(rateElement).toBeInTheDocument()
  })
})
