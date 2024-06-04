'use client'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'

import { Select } from '@/components/Select'

import { MovieList } from './components/MovieList'
import { useFetchMovieList } from './hooks/useFetchMovieList'

export const FilterPage = ({ slug }: { slug: string[] }) => {
  const { data, error, status, isFetchingNextPage, fetchNextPage, hasNextPage, isLoading } = useFetchMovieList(
    slug?.join('_'),
  )
  const allRows = data ? data?.pages?.flatMap(d => d?.data?.data ?? []) : []
  const router = useRouter()
  const genreOptions = [
    { title: 'درام', value: 'drama' },
    { title: 'اکشن', value: 'action' },
    { title: 'کمدی', value: 'comedy' },
    { title: 'علمی تخیلی', value: 'sci-fi' },
  ]

  const rateOptions = [
    { title: 'بالاترین امتیاز', value: 'max-rate' },
    { title: 'پایین ترین امتیاز', value: 'min-rate' },
  ]

  const genreSlug = useMemo(() => {
    return slug?.filter(item => item !== 'max-rate' && item !== 'min-rate')
  }, [slug])

  const rateSlug = useMemo(() => {
    return slug?.filter(item => item === 'max-rate' || item === 'min-rate')?.[0] ?? ''
  }, [slug])

  const onChangeGenre = (value: string | string[]) => {
    let path = ''
    if (rateSlug) {
      path = `/filter/${(value as string[])?.join('/')}/${rateSlug}`
    } else {
      path = `/filter/${(value as string[])?.join('/')}`
    }
    router.push(path)
  }

  const onChangeRate = (value: string | string[]) => {
    let path = ''
    if (genreSlug?.length > 0) {
      path = `/filter/${genreSlug?.join('/')}/${value}`
    } else {
      path = `/filter/${value}`
    }
    router.push(path)
  }

  const fetchNextPageHandle = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }

  if (status === 'error') {
    return <span>Error: {(error as Error).message}</span>
  }

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-12">
        <Select lable="ژانر" options={genreOptions} columns={2} multi onChange={onChangeGenre} value={genreSlug} />
        <Select lable="امتباز فیلم" options={rateOptions} columns={1} onChange={onChangeRate} value={rateSlug} />
      </div>
      <div className="h-[calc(100%-227px)] px-10">
        <div className="pb-5 pt-11 text-white">لیست تمامی فیلم و سریال ها</div>
        <MovieList data={allRows} isLoading={isFetchingNextPage || isLoading} fetchNextPage={fetchNextPageHandle} />
      </div>
    </>
  )
}
