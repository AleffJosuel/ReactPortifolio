import { useState, type FormEvent } from 'react'
import { submitContactMessage } from '../api/contact'
import type { ContactPayload } from '../types/contact'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const EMPTY_FORM: ContactPayload = { name: '', email: '', message: '' }

export function useContactForm() {
  const [form, setForm] = useState<ContactPayload>(EMPTY_FORM)
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  function handleChange(field: keyof ContactPayload, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setStatus('submitting')
    setErrorMessage(null)

    try {
      await submitContactMessage(form)
      setStatus('success')
      setForm(EMPTY_FORM)
    } catch {
      setStatus('error')
      setErrorMessage('Não foi possível enviar sua mensagem. Tente novamente.')
    }
  }

  return { form, status, errorMessage, handleChange, handleSubmit }
}
