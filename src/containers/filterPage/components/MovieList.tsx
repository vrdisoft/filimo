'use client'
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'

import { useFetchMovieList } from '../hooks/useFetchMovieList'
import { MovieListProps } from '../type'
import { MovieCard } from './MovieCard'
import { MovieCardSkeleton } from './MovieCardSkeleton'

export const MovieList = (props: MovieListProps) => {
  const { slug } = props
  const { data, error, status, isFetchingNextPage, fetchNextPage, hasNextPage, isLoading } = useFetchMovieList(
    slug?.join('_'),
  )
  const allRows = data ? data?.pages?.flatMap(d => d?.data?.data ?? []) : []
  const fetchNextPageHandle = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }

  if (status === 'error') {
    return <span>Error: {(error as Error).message}</span>
  }

  const [lastElementRef] = useInfiniteScroll(fetchNextPageHandle)

  return (
    <div className="text-white grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {allRows?.map((movie, index) => (
        <div key={movie?.id} ref={index === allRows.length - 1 ? lastElementRef : null}>
          <MovieCard movie={movie} />
        </div>
      ))}
      {isLoading && <MovieCardSkeleton />}
    </div>
  )
}
