import { SITE } from '../../lib/constants'
import { COPY } from '../../lib/copy'
import { useLang } from '../../hooks/useLang'

export function About() {
  const [lang] = useLang()
  const t = COPY[lang].about

  return (
    <section id="sobre" className="border-b border-divider">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr] md:gap-14 md:px-10">
        <div>
          <p className="mb-5 text-xs tracking-[0.14em] text-muted uppercase">{t.sectionLabel}</p>
          <p className="text-xl leading-relaxed sm:text-2xl">{t.paragraph1}</p>
          <p className="mt-5 text-base leading-relaxed text-muted">{t.paragraph2}</p>

          <div className="mt-7 overflow-hidden rounded-xl border border-divider">
            <div className="grid grid-cols-1 gap-px bg-divider sm:grid-cols-2">
              <div className="bg-background px-5 py-4.5">
                <p className="text-[11px] tracking-[0.12em] text-muted uppercase">{t.educationLabel}</p>
                <p className="mt-2 font-display text-lg font-bold">{t.educationValue}</p>
                <p className="mt-1 text-[13px] text-muted">{t.educationDetail}</p>
              </div>
              <div className="bg-background px-5 py-4.5">
                <p className="text-[11px] tracking-[0.12em] text-muted uppercase">{t.focusLabel}</p>
                <p className="mt-2 font-display text-lg font-bold text-primary">{t.focusValue}</p>
                <p className="mt-1 text-[13px] text-muted">{t.focusDetail}</p>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2.5">
            <a
              href={SITE.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-divider px-4 py-2.5 text-sm text-text hover:bg-surface"
            >
              {t.github}
            </a>
            <a
              href={SITE.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-divider px-4 py-2.5 text-sm text-text hover:bg-surface"
            >
              {t.linkedin}
            </a>
            <a
              href={SITE.resumeFile}
              download="Curriculo-Aleff-Josuel.pdf"
              className="rounded-lg border border-divider px-4 py-2.5 text-sm text-text hover:bg-surface"
            >
              {t.resume}
            </a>
          </div>
        </div>

        <div className="grid h-[220px] place-items-center rounded-xl bg-surface text-xs text-muted sm:h-[360px]">
          {t.portraitPlaceholder}
        </div>
      </div>
    </section>
  )
}
