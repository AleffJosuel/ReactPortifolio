import { useLang } from '../../hooks/useLang'
import { COPY } from '../../lib/copy'
import { PROJECT_CASES } from '../../lib/projectCases'

interface CasePanelProps {
  caseId: string | null
  onClose: () => void
  onStep: (direction: 1 | -1) => void
}

export function CasePanel({ caseId, onClose, onStep }: CasePanelProps) {
  const [lang] = useLang()
  const t = COPY[lang]
  const project = PROJECT_CASES.find((p) => p.id === caseId)
  const open = project !== undefined
  const loc = project?.[lang]

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 z-[70] bg-slate-950/60 transition-opacity duration-200"
        style={{ opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none' }}
      />
      <aside
        className="fixed top-0 right-0 z-[80] h-screen w-full overflow-auto border-l border-divider bg-background shadow-[-24px_0_60px_rgba(2,6,23,0.45)] transition-transform duration-[380ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-[480px] lg:w-[620px]"
        style={{ transform: open ? 'translateX(0)' : 'translateX(100%)' }}
        aria-hidden={!open}
      >
        {project && loc && (
          <>
            <div className="sticky top-0 flex items-center gap-3 border-b border-divider bg-background/92 px-6 py-4 backdrop-blur-sm">
              <span className="mr-auto text-[11px] tracking-[0.12em] text-primary uppercase">
                {t.projects.caseLabel} {project.num}
              </span>
              <button
                type="button"
                onClick={() => onStep(-1)}
                className="grid h-8 w-8 place-items-center rounded-lg border border-divider text-text"
                aria-label="Previous"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => onStep(1)}
                className="grid h-8 w-8 place-items-center rounded-lg border border-divider text-text"
                aria-label="Next"
              >
                →
              </button>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border border-divider px-3 py-2 font-display text-xs font-bold text-text"
              >
                {t.projects.close}
              </button>
            </div>

            <div className="px-6 py-8 sm:px-8">
              <div className="h-[180px] overflow-hidden rounded-xl bg-surface sm:h-[230px]">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                )}
              </div>

              <h3 className="mt-6 text-3xl leading-tight font-bold sm:text-[38px]">{project.title}</h3>
              <p className="mt-3 text-[13px] text-muted">
                {loc.role} · {loc.status}
              </p>
              <p className="mt-5 text-lg leading-relaxed">{loc.summary}</p>

              <div className="mt-6 border-l-2 border-primary py-1 pl-4">
                <p className="text-[15px] leading-relaxed text-muted">{loc.proves}</p>
              </div>

              <p className="mt-8 mb-2.5 text-[11px] tracking-[0.12em] text-muted uppercase">{t.projects.how}</p>
              {loc.how.map((line) => (
                <p key={line} className="border-t border-divider py-3 text-[15px] leading-relaxed">
                  {line}
                </p>
              ))}

              <p className="mt-7 mb-2.5 text-[11px] tracking-[0.12em] text-muted uppercase">{t.projects.next}</p>
              <p className="border-t border-divider pt-3 text-[15px] leading-relaxed">{loc.next}</p>

              <div className="mt-7 flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full border border-divider px-2.5 py-1 text-[11px] text-muted">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-block rounded-lg px-5 py-3.5 font-display text-sm font-bold"
                style={{ background: 'var(--color-primary)', color: 'var(--color-ink)' }}
              >
                {t.projects.repo}
              </a>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
