import { useState } from 'react'
import { FormField } from '../ui/FormField'
import { Button } from '../ui/Button'

interface AdminGateProps {
  onSubmit: (token: string) => void
}

/**
 * Client-side prompt for the admin token, stored via useAdminToken. This
 * is UX convenience only -- the real gate is the backend's
 * AdminAuthInterceptor checking the X-Admin-Token header server-side.
 */
export function AdminGate({ onSubmit }: AdminGateProps) {
  const [token, setToken] = useState('')

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit(token)
      }}
      className="mx-auto flex max-w-sm flex-col gap-4 px-6 py-24"
    >
      <h1 className="text-center text-xl font-semibold text-white">Acesso administrativo</h1>
      <FormField label="Token de admin" name="token" type="password" value={token} onChange={setToken} required />
      <Button type="submit">Entrar</Button>
    </form>
  )
}
