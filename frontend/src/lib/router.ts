import { useEffect, useState } from 'react'

// Minimal client-side router: only 5 fixed routes exist in this app, so a
// full router library isn't warranted (and react-router-dom currently
// ships known CVEs across its published versions -- see App.tsx).
type Listener = () => void

const listeners = new Set<Listener>()

export function navigate(path: string) {
  if (path !== window.location.pathname) {
    window.history.pushState({}, '', path)
    listeners.forEach((listener) => listener())
  }
}

export function useRoute(): string {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    function handleChange() {
      setPath(window.location.pathname)
    }
    listeners.add(handleChange)
    window.addEventListener('popstate', handleChange)
    return () => {
      listeners.delete(handleChange)
      window.removeEventListener('popstate', handleChange)
    }
  }, [])

  return path
}
