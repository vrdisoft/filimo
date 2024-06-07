import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'

import { getMovieList } from './_request'
import { Filter } from './components/Filter'
import { MovieList } from './components/MovieList'
import { PAGE_SIZE } from './constants'
import { MovieListResponse } from './type'

const FilterPage = async (props: { slug: string[] }) => {
  const { slug } = props
  const queryClient = new QueryClient()

  const getNextPageParams = (data?: { data: MovieListResponse; nextPage: number }) => {
    if (Math.ceil((data?.data.total ?? 0) / PAGE_SIZE) < (data?.nextPage ?? 0)) return undefined
    return data?.nextPage
  }

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['movieList', slug ?? ''],
    queryFn: ({ pageParam }) => getMovieList(slug?.join('_'), pageParam, PAGE_SIZE),
    getNextPageParam: (lastPage: { data: MovieListResponse; nextPage: number } | undefined) =>
      getNextPageParams(lastPage),
    initialPageParam: 1,
  })

  return (
    <>
      <Filter slug={slug} />
      <div className="h-[calc(100%-227px)] px-10">
        <div className="pb-5 pt-11 text-white">لیست تمامی فیلم و سریال ها</div>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <MovieList slug={slug} />
        </HydrationBoundary>
      </div>
    </>
  )
}

FilterPage.defaultProps = {
  slug: [],
}

export { FilterPage }
