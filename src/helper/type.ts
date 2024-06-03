export type Category = {
  title_en: string
  title: string
}

export type MovieType = {
  id: string
  cover: string
  movie_title: string
  rate_avrage: number
  categories: Category[]
}
