'use client'
import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

const notFoundUrl = '/svg/fa-filimo-dark-logo.svg'

export const NextImage = (props: ImageProps) => {
  const { width, height, src: srcProps, quality = 80, ...rest } = props
  const [src, setSrc] = useState(srcProps)

  return (
    <Image
      width={width && height ? width : undefined}
      height={width && height ? height : undefined}
      blurDataURL={'/assets/svg/skeleton-image.svg'}
      src={src}
      loader={({ src, width: defaultWidth }) => {
        const width = props.width || defaultWidth ? `&w=${props.width || defaultWidth}` : ''
        const height = props.height ? `&h=${props.height}` : ''
        return `${src}?q=${quality}${width}${height}`
      }}
      onError={() => setSrc(notFoundUrl)}
      {...{
        quality,
        ...rest,
      }}
    />
  )
}
