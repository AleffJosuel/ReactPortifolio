import { COPY } from '../../lib/copy'
import { useLang } from '../../hooks/useLang'
import { useCopyEmail } from '../../hooks/useCopyEmail'
import { HERO_STATS, LANGUAGE_STATS } from '../../lib/stackItems'

export function Hero() {
  const [lang] = useLang()
  const t = COPY[lang].hero
  const { copied, copyEmail } = useCopyEmail()

  const totalLanguages = LANGUAGE_STATS.reduce((sum, l) => sum + l.count, 0)
  const stats = [
    { value: String(HERO_STATS.publicRepos), label: t.stats[0], accent: false },
    { value: String(HERO_STATS.languagesInUse), label: t.stats[1], accent: false },
    { value: String(HERO_STATS.projectsInProgress), label: t.stats[2], accent: true },
  ]

  return (
    <section id="top" className="border-b border-divider">
      <div className="mx-auto grid max-w-6xl grid-cols-1 px-6 md:grid-cols-[1.5fr_1fr] md:px-10">
        <div className="border-divider py-12 md:border-r md:py-20 md:pr-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-divider px-3.5 py-1.5 text-xs text-muted">
            <span
              className="h-[7px] w-[7px] rounded-full"
              style={{ background: 'var(--color-primary)', animation: 'pulse-dot 2.2s ease-in-out infinite' }}
            />
            <span>{t.badge}</span>
          </div>

          <h1 className="mt-6 font-display text-6xl leading-[0.92] font-bold text-text md:text-[88px]">
            Aleff
            <br />
            Josuel
          </h1>

          <p className="mt-5 text-sm font-semibold tracking-[0.14em] text-primary uppercase">{t.accentLine}</p>
          <p className="mt-2.5 text-sm text-muted">{t.educationLine}</p>
          <p className="mt-6 max-w-[560px] text-lg leading-relaxed text-text">{t.lead}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projetos"
              className="rounded-lg px-5 py-3.5 font-display text-sm font-bold"
              style={{ background: 'var(--color-primary)', color: 'var(--color-ink)' }}
            >
              {t.seeProjects}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="rounded-lg border border-divider px-5 py-3.5 font-display text-sm font-bold text-text"
            >
              {copied ? t.emailCopied : t.copyEmail}
            </button>
          </div>
        </div>

        <div className="flex flex-col pb-8 md:pb-0">
          <div className="border-b border-divider py-5 md:pl-8">
            <p className="text-[11px] tracking-[0.12em] text-muted uppercase">{t.githubLabel}</p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-1">
            {stats.map((stat) => (
              <div key={stat.label} className="border-b border-divider py-6 md:pl-8">
                <span
                  className="font-display text-3xl font-bold md:text-[46px]"
                  style={{ color: stat.accent ? 'var(--color-primary)' : 'var(--color-text)' }}
                >
                  {stat.value}
                </span>
                <p className="mt-1 text-xs text-muted md:text-[13px]">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 py-6 md:pl-8">
            <p className="text-[11px] tracking-[0.12em] text-muted uppercase">{t.langBarLabel}</p>
            <div className="flex h-2 w-full overflow-hidden rounded-full bg-surface">
              {LANGUAGE_STATS.map((l) => (
                <span
                  key={l.name}
                  title={l.name}
                  style={{ width: `${Math.round((l.count / totalLanguages) * 100)}%`, background: l.color }}
                />
              ))}
            </div>
            <div className="flex flex-wrap gap-3.5">
              {LANGUAGE_STATS.map((l) => (
                <span key={l.name} className="inline-flex items-center gap-1.5 text-xs text-muted">
                  <span className="h-2 w-2 rounded-full" style={{ background: l.color }} />
                  {l.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
