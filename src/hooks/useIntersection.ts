import React, { useEffect, useRef } from 'react'

export function useIntersection(onNexPage: () => void) {
  const ref = useRef() as React.RefObject<HTMLDivElement>
  const observer = useRef<IntersectionObserver | null>()

  useEffect(() => {
    const options = {
      root: document,
      rootMargin: '20px',
      threshold: 1,
    }
    const callback = (entries: any) => {
      if (entries[0].isIntersecting) {
        onNexPage()
      }
    }

    observer.current = new IntersectionObserver(callback, options)
    if (ref.current) {
      observer.current.observe(ref.current)
    }
    return () => {
      if (observer.current) observer.current.disconnect()
    }
  })

  return ref
}
