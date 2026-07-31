import { useEffect, useRef, useState } from 'react'
import { SITE } from '../lib/constants'

/** Copies the site's contact e-mail to the clipboard and flips `copied` back off after 1.8s. */
export function useCopyEmail() {
  const [copied, setCopied] = useState(false)
  const timerRef = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timerRef.current), [])

  function copyEmail() {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(SITE.email).catch(() => {})
    }
    setCopied(true)
    window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => setCopied(false), 1800)
  }

  return { copied, copyEmail }
}
