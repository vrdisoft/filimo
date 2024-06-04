import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

const useInfiniteScroll = (
  callback: VoidFunction,
  scrollableElementRef?: React.RefObject<HTMLElement>,
): [Dispatch<SetStateAction<Element | null>>] => {
  const observer = useRef<IntersectionObserver | null>(null)
  const [lastElement, setLastElement] = useState<Element | null>(null)
  useEffect(() => {
    if (observer.current) observer.current.disconnect()

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        callback()
      }
    })

    if (lastElement) observer.current.observe(lastElement)
  }, [lastElement, scrollableElementRef])

  return [setLastElement]
}

export { useInfiniteScroll }
