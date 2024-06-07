import { MovieType } from '@/type'

export type MovieListResponse = {
  data: MovieType[]
  total: number
}

export type MovieListProps = {
  slug: string[]
}

export type MovieCardProps = {
  movie: MovieType
}
