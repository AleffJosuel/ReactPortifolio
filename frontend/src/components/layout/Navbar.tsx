import { NAV_ITEMS, SITE } from '../../lib/constants'
import { useRoute } from '../../lib/router'
import { Link } from './Link'

export function Navbar() {
  const path = useRoute()

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="font-semibold tracking-tight text-white">
          {SITE.name}
        </Link>
        <ul className="flex gap-6 text-sm">
          {NAV_ITEMS.map((item) => {
            const isActive = path === item.href
            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={`transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-muted'}`}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
