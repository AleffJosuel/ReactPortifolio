import { useState } from 'react'

const STORAGE_KEY = 'portfolio_admin_token'

/**
 * Token lives in sessionStorage only (cleared when the tab closes). This
 * is a UX convenience, not a security boundary -- the backend's
 * AdminAuthInterceptor is what actually enforces the check.
 */
export function useAdminToken() {
  const [token, setTokenState] = useState<string | null>(() => sessionStorage.getItem(STORAGE_KEY))

  function setToken(value: string) {
    sessionStorage.setItem(STORAGE_KEY, value)
    setTokenState(value)
  }

  function clearToken() {
    sessionStorage.removeItem(STORAGE_KEY)
    setTokenState(null)
  }

  return { token, isSet: token !== null, setToken, clearToken }
}
