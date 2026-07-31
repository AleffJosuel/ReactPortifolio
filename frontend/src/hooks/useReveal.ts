import { useEffect, useRef, useState } from 'react'

/**
 * Fades a section in once it scrolls into view. Falls back to revealing
 * after 1.8s so content never stays invisible if the observer doesn't fire
 * (e.g. the element is already on screen on load).
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const fallback = window.setTimeout(() => setRevealed(true), 1800)

    if (!('IntersectionObserver' in window)) {
      setRevealed(true)
      return () => window.clearTimeout(fallback)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.06 },
    )
    observer.observe(node)

    return () => {
      window.clearTimeout(fallback)
      observer.disconnect()
    }
  }, [])

  return { ref, revealed }
}
