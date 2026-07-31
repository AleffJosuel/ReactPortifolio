import { useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'

const STORAGE_KEY = 'portfolio:theme'

function readInitialTheme(): Theme {
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'dark' || stored === 'light') return stored
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

// Module-level store (same pattern as lib/router.ts) so every component
// reading the theme stays in sync without needing a React context provider.
let theme: Theme = readInitialTheme()
const listeners = new Set<() => void>()

function applyToDocument(value: Theme) {
  document.documentElement.dataset.theme = value
}
applyToDocument(theme)

function setTheme(value: Theme) {
  theme = value
  window.localStorage.setItem(STORAGE_KEY, value)
  applyToDocument(value)
  listeners.forEach((listener) => listener())
}

export function useTheme(): [Theme, (value: Theme) => void] {
  const [value, setValue] = useState(theme)

  useEffect(() => {
    function handleChange() {
      setValue(theme)
    }
    listeners.add(handleChange)
    return () => {
      listeners.delete(handleChange)
    }
  }, [])

  return [value, setTheme]
}
