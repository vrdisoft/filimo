import { MovieType } from '@/type'

export type MovieListResponse = {
  data: MovieType[]
  total: number
}

export type MovieListProps = {
  data: MovieType[]
  isLoading?: boolean
  fetchNextPage: () => void
}

export type MovieCardProps = {
  movie: MovieType
}
