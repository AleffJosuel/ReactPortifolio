import { useEffect, useState } from 'react'

export type Lang = 'pt' | 'en'

const STORAGE_KEY = 'portfolio:lang'

function readInitialLang(): Lang {
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'en' ? 'en' : 'pt'
}

// Same module-level store pattern as useTheme/lib/router.ts.
let lang: Lang = readInitialLang()
const listeners = new Set<() => void>()

function applyToDocument(value: Lang) {
  document.documentElement.lang = value
}
applyToDocument(lang)

function setLang(value: Lang) {
  lang = value
  window.localStorage.setItem(STORAGE_KEY, value)
  applyToDocument(value)
  listeners.forEach((listener) => listener())
}

export function useLang(): [Lang, (value: Lang) => void] {
  const [value, setValue] = useState(lang)

  useEffect(() => {
    function handleChange() {
      setValue(lang)
    }
    listeners.add(handleChange)
    return () => {
      listeners.delete(handleChange)
    }
  }, [])

  return [value, setLang]
}
