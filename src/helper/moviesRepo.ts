import { MovieType } from '@/type'

import jsonFile from '../data/data.json' assert { type: 'json' }

const movieList = jsonFile as unknown as MovieType[]
export const movieRepo = {
  getMovies: (page: number, filter: string[], sort: string, pageSize: number) => {
    const startIndex = (page - 1) * pageSize
    const endIndex = page * pageSize

    const objFilter: { [key: string]: string } = {}
    filter.forEach(item => (objFilter[item] = item))

    const data =
      filter.length > 0
        ? movieList.filter(item => item.categories.some(category => category.title_en === objFilter[category.title_en]))
        : [...movieList]
    if (sort) {
      if (sort === 'max-rate') {
        data.sort((a, b) => (a.rate_avrage < b.rate_avrage ? 1 : -1))
      } else {
        data.sort((a, b) => (a.rate_avrage > b.rate_avrage ? 1 : -1))
      }
    }
    return {
      data: data.slice(startIndex, endIndex),
      total: data.length,
    }
  },
}
