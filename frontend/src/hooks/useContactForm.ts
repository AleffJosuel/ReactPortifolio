import { useEffect, useRef, useState, type FormEvent } from 'react'
import { submitContactMessage } from '../api/contact'
import type { ContactPayload } from '../types/contact'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const EMPTY_FORM: ContactPayload = { name: '', email: '', message: '' }

// After this long still submitting, we assume the free-tier backend is
// waking from sleep and show a reassuring "warming up" hint.
const SLOW_HINT_DELAY_MS = 4000

export function useContactForm() {
  const [form, setForm] = useState<ContactPayload>(EMPTY_FORM)
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [slow, setSlow] = useState(false)
  const slowTimerRef = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(slowTimerRef.current), [])

  function handleChange(field: keyof ContactPayload, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setStatus('submitting')
    setErrorMessage(null)
    setSlow(false)
    window.clearTimeout(slowTimerRef.current)
    slowTimerRef.current = window.setTimeout(() => setSlow(true), SLOW_HINT_DELAY_MS)

    try {
      await submitContactMessage(form)
      setStatus('success')
      setForm(EMPTY_FORM)
    } catch {
      setStatus('error')
      setErrorMessage('Não foi possível enviar sua mensagem. Tente novamente.')
    } finally {
      window.clearTimeout(slowTimerRef.current)
      setSlow(false)
    }
  }

  return { form, status, errorMessage, slow, handleChange, handleSubmit }
}
