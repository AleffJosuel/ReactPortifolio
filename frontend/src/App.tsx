import { useEffect } from 'react'
import { useRoute, navigate } from './lib/router'
import { HomePage } from './pages/HomePage'
import { AdminPage } from './pages/AdminPage'

// The site is a one-page design with anchor sections; these old routes are
// kept working as redirects so links shared before the redesign don't break.
const LEGACY_ANCHOR_REDIRECTS: Record<string, string> = {
  '/sobre': 'sobre',
  '/projetos': 'projetos',
  '/contato': 'contato',
}

function App() {
  const path = useRoute()
  const anchor = LEGACY_ANCHOR_REDIRECTS[path]

  useEffect(() => {
    if (!anchor) return
    navigate('/')
    requestAnimationFrame(() => {
      document.getElementById(anchor)?.scrollIntoView()
    })
  }, [anchor])

  if (path.startsWith('/admin')) return <AdminPage />
  return <HomePage />
}

export default App
