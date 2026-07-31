import { useEffect, useState } from 'react'

/** Tracks which of the given section ids is currently in the "reading" band of the viewport. */
export function useScrollSpy(sectionIds: readonly string[]): string {
  const [active, setActive] = useState('')

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [sectionIds])

  return active
}
