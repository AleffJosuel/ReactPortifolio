import { SITE } from '../../lib/constants'

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 text-center text-sm text-muted">
      <p>
        © {new Date().getFullYear()} {SITE.name}. Feito com React, TypeScript, Tailwind CSS, Spring Boot e Supabase.
      </p>
    </footer>
  )
}
