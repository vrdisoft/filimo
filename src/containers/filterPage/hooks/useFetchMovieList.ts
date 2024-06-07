import { useInfiniteQuery } from '@tanstack/react-query'

import { getMovieList } from '../_request'
import { PAGE_SIZE } from '../constants'
import { MovieListResponse } from '../type'

export const useFetchMovieList = (slug: string) => {
  const getNextPageParams = (data?: { data: MovieListResponse; nextPage: number }) => {
    if (Math.ceil((data?.data.total ?? 0) / PAGE_SIZE) < (data?.nextPage ?? 0)) return undefined
    return data?.nextPage
  }

  const { status, data, error, isFetchingNextPage, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
    queryKey: ['movieList', slug],
    queryFn: ({ pageParam }) => getMovieList(slug, pageParam, PAGE_SIZE),
    getNextPageParam: lastPage => getNextPageParams(lastPage),
    initialPageParam: 1,
  })

  return { data, error, status, isFetchingNextPage, fetchNextPage, hasNextPage, isLoading }
}
