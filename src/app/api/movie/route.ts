import { NextRequest } from 'next/server'

import { movieRepo } from '@/helper/moviesRepo'

const genreObj: { [key: string]: string } = {
  drama: 'drama',
  action: 'action',
  comedy: 'comedy',
  'sci-fi': 'sci-fi',
}

export const GET = async (request: NextRequest) => {
  let page = 1
  let filter: string[] = []
  let sort = ''
  request.nextUrl.searchParams.forEach((value, key) => {
    if (key === 'page') {
      page = Number(value)
    } else if (key === 'slug') {
      const slugArray = value.split('-')
      filter = slugArray.filter(item => item === genreObj[item])
      sort = slugArray.filter(item => item === 'max-rate' || item === 'min-rate')?.[0] ?? ''
    }
  })

  return Response.json(movieRepo.getMovies(page, filter, sort))
}
