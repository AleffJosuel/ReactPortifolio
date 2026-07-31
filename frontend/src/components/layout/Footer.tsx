import { useLang } from '../../hooks/useLang'
import { COPY } from '../../lib/copy'

export function Footer() {
  const [lang] = useLang()
  const t = COPY[lang]

  return (
    <footer className="border-t border-divider">
      <div className="mx-auto flex max-w-6xl gap-5 px-6 py-5 text-xs text-muted md:px-10">
        <span>{t.footer.rights}</span>
        <span className="ml-auto">React · TypeScript · Java/Spring Boot · PostgreSQL · Supabase</span>
      </div>
    </footer>
  )
}
