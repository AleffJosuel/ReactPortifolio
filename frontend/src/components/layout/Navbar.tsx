import { SITE, SECTION_IDS } from '../../lib/constants'
import { COPY } from '../../lib/copy'
import { useLang } from '../../hooks/useLang'
import { useTheme } from '../../hooks/useTheme'
import { useScrollSpy } from '../../hooks/useScrollSpy'

export function Navbar() {
  const [lang, setLang] = useLang()
  const [theme, setTheme] = useTheme()
  const active = useScrollSpy(SECTION_IDS)
  const t = COPY[lang]

  return (
    <header className="sticky top-0 z-50 border-b border-divider bg-background/88 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center gap-7 px-6 py-4 md:px-10">
        <a href="#top" className="mr-auto font-display text-base font-bold text-text">
          {SITE.name}
        </a>

        <ul className="hidden items-center gap-7 sm:flex">
          {SECTION_IDS.map((id, i) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`border-b-2 pb-1 text-[13px] transition-colors ${
                  active === id ? 'border-primary text-primary' : 'border-transparent text-muted hover:text-text'
                }`}
              >
                {t.nav[i]}
              </a>
            </li>
          ))}
        </ul>

        <div className="inline-flex overflow-hidden rounded-lg border border-divider text-xs">
          <button
            type="button"
            onClick={() => setLang('pt')}
            className="px-2.5 py-1.5"
            style={{
              background: lang === 'pt' ? 'var(--color-primary)' : 'transparent',
              color: lang === 'pt' ? 'var(--color-ink)' : 'var(--color-text)',
            }}
          >
            PT
          </button>
          <button
            type="button"
            onClick={() => setLang('en')}
            className="border-l border-divider px-2.5 py-1.5"
            style={{
              background: lang === 'en' ? 'var(--color-primary)' : 'transparent',
              color: lang === 'en' ? 'var(--color-ink)' : 'var(--color-text)',
            }}
          >
            EN
          </button>
        </div>

        <button
          type="button"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          title={theme === 'dark' ? t.themeLight : t.themeDark}
          className="grid h-[34px] w-[34px] place-items-center rounded-lg border border-divider text-text"
        >
          {theme === 'dark' ? '☾' : '☀'}
        </button>

        <a
          href={SITE.resumeFile}
          download="Curriculo-Aleff-Josuel.pdf"
          className="rounded-lg px-4 py-2 font-display text-[13px] font-bold"
          style={{ background: 'var(--color-primary)', color: 'var(--color-ink)' }}
        >
          {t.downloadCv}
        </a>
      </nav>
    </header>
  )
}
