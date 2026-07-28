import { useRoute } from './lib/router'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ContactPage } from './pages/ContactPage'
import { AdminPage } from './pages/AdminPage'

// Only 5 fixed routes exist, so a full router library is not needed --
// react-router-dom currently ships known CVEs across its published
// versions, and reading the pathname is enough for a site this size.
function App() {
  const path = useRoute()

  if (path.startsWith('/admin')) return <AdminPage />
  if (path.startsWith('/sobre')) return <AboutPage />
  if (path.startsWith('/projetos')) return <ProjectsPage />
  if (path.startsWith('/contato')) return <ContactPage />
  return <HomePage />
}

export default App
