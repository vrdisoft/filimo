import { customApi } from '@/helper/api/customApi'

import { MovieListResponse } from './type'

const getMovieList = async (slug: string, page: number, pageSize: number) => {
  try {
    const res = await customApi.get<MovieListResponse>('/movie', {
      params: { page: page ?? 1, slug, pageSize },
    })
    return { data: res.data, nextPage: (page ?? 1) + 1 }
  } catch {}
}

export { getMovieList }
