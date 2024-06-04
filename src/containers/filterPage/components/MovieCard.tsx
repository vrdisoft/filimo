import { NextImage } from '@/components/NextImage'

import { MovieCardProps } from '../type'

export const MovieCard = (props: MovieCardProps) => {
  const { movie } = props

  return (
    <div className="w-full flex flex-col">
      <div className="w-full relative aspect-[3/4] rounded-lg">
        <NextImage
          src={movie?.pic.movie_img_b ?? '/svg/fa-filimo-dark-logo.svg'}
          alt={movie?.movie_title ?? 'image'}
          fill
          className="rounded-lg"
        />
      </div>
      <div className="flex justify-between items-center py-2 px-1 text-xs">
        <span className="max-w-[50%] truncate">{movie?.movie_title}</span>
        <span className="bg-black-border rounded-xl px-3 py-1 text-[0.6rem]">{`امتیاز: ${Number(Number(movie?.rate_avrage ?? 0).toFixed(1))}`}</span>
      </div>
    </div>
  )
}
