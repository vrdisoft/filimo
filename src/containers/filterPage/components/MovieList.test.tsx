// @ts-nocheck

import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import { MovieList } from './MovieList'

window.IntersectionObserver = function () {
  return {
    observe: jest.fn(),
    disconnect: jest.fn(),
  }
}

const isLoadingValue = jest.fn()
const isErrorValue = jest.fn(() => false)
const dataValue = jest.fn(() => {})

jest.mock('../hooks/useFetchMovieList', () => ({
  useFetchMovieList: jest.fn(() => ({
    data: dataValue(),
    error: '',
    isLoading: isLoadingValue(),
    isError: isErrorValue(),
  })),
}))

describe('while loading', () => {
  it('renders a loader', () => {
    isLoadingValue.mockImplementation(() => true)
    render(<MovieList slug={[]} />)
    const loadingElement = screen.getAllByTestId('movieCardSkeleton')
    expect(loadingElement.length).toBe(6)
  })
})

describe('with data', () => {
  it('renders data', () => {
    isErrorValue.mockImplementation(() => false)
    isLoadingValue.mockImplementation(() => false)
    dataValue.mockImplementation(() => ({
      pages: [
        {
          data: {
            data: [
              {
                id: '133615',
                cover: '',
                movie_title: 'ایران، روز دوم',
                rate_avrage: '3.58',
                categories: [
                  {
                    title_en: 'drama',
                    title: 'درام',
                  },
                ],
                pic: {
                  movie_img_b: 'https://static.cdn.asset.filimo.com/flmt/mov_133615_56186-b.jpg',
                },
              },
            ],
            total: 20,
          },
        },
      ],
    }))

    render(<MovieList slug={[]} />)
    const nameElement = screen.getByText('ایران، روز دوم')
    const rateElement = screen.getByText('امتیاز: 3.6')
    expect(nameElement).toBeInTheDocument()
    expect(rateElement).toBeInTheDocument()
  })
})
