import { useCallback, useEffect, useState } from 'react'
import { fetchContactMessages } from '../api/contact'
import type { ContactMessage } from '../types/contact'

interface UseContactMessagesResult {
  messages: ContactMessage[]
  loading: boolean
  error: string | null
  refetch: () => void
}

export function useContactMessages(adminToken: string): UseContactMessagesResult {
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [reloadToken, setReloadToken] = useState(0)

  useEffect(() => {
    if (!adminToken) {
      setLoading(false)
      return
    }

    let cancelled = false

    setLoading(true)
    setError(null)

    fetchContactMessages(adminToken)
      .then((data) => {
        if (!cancelled) setMessages(data)
      })
      .catch(() => {
        if (!cancelled) setError('Não foi possível carregar as mensagens agora.')
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [adminToken, reloadToken])

  const refetch = useCallback(() => setReloadToken((token) => token + 1), [])

  return { messages, loading, error, refetch }
}
