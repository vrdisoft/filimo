'use client'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'

import { Select } from '@/components/Select'

import { genreOptions, rateOptions } from '../constants'

export const Filter = ({ slug }: { slug: string[] }) => {
  const router = useRouter()

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

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-12">
      <Select label="ژانر" options={genreOptions} columns={2} multi onChange={onChangeGenre} value={genreSlug} />
      <Select label="امتباز فیلم" options={rateOptions} columns={1} onChange={onChangeRate} value={rateSlug} />
    </div>
  )
}
