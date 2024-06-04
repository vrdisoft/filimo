import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'

import { MovieListProps } from '../type'
import { MovieCard } from './MovieCard'
import { MovieCardSkeleton } from './MovieCardSkeleton'

export const MovieList = (props: MovieListProps) => {
  const { data, isLoading, fetchNextPage } = props
  const [lastElementRef] = useInfiniteScroll(fetchNextPage)

  return (
    <div className="text-white grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {data.map((movie, index) => (
        <div key={movie?.id} ref={index === data.length - 1 ? lastElementRef : null}>
          <MovieCard movie={movie} />
        </div>
      ))}
      {isLoading && <MovieCardSkeleton />}
    </div>
  )
}
