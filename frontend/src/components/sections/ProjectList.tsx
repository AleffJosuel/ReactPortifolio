import { useLang } from '../../hooks/useLang'
import { COPY } from '../../lib/copy'
import { PROJECT_CASES } from '../../lib/projectCases'

interface ProjectListProps {
  filter: number
  onFilterChange: (index: number) => void
  onOpenCase: (id: string) => void
}

export function ProjectList({ filter, onFilterChange, onOpenCase }: ProjectListProps) {
  const [lang] = useLang()
  const t = COPY[lang]
  const filterName = t.projects.filters[filter]
  const visible = PROJECT_CASES.filter(
    (p) => filter === 0 || p.tech.some((tech) => tech.toLowerCase() === filterName.toLowerCase()),
  )

  return (
    <section id="projetos" className="border-b border-divider">
      <div className="mx-auto max-w-6xl px-6 pt-14 pb-6 md:px-10">
        <div className="mb-6 flex flex-wrap items-end gap-6">
          <div className="mr-auto">
            <p className="text-xs tracking-[0.14em] text-muted uppercase">{t.projects.sectionLabel}</p>
            <p className="mt-2.5 max-w-xl text-xl leading-snug text-text">{t.projects.hint}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {t.projects.filters.map((label, i) => (
              <button
                key={label}
                type="button"
                onClick={() => onFilterChange(i)}
                className="rounded-full border px-3.5 py-1.5 text-xs"
                style={{
                  borderColor: i === filter ? 'var(--color-primary)' : 'var(--color-divider)',
                  background: i === filter ? 'var(--color-primary)' : 'transparent',
                  color: i === filter ? 'var(--color-ink)' : 'var(--color-muted)',
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div>
          {visible.map((project) => {
            const loc = project[lang]
            const inProgress = loc.status === 'Em construção' || loc.status === 'In progress'

            function open() {
              onOpenCase(project.id)
            }

            return (
              <div
                key={project.id}
                role="button"
                tabIndex={0}
                onClick={open}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    open()
                  }
                }}
                className="flex cursor-pointer flex-col gap-3 rounded-lg border-t border-divider px-4 py-6 transition-colors hover:bg-surface md:grid md:grid-cols-[52px_minmax(0,1.5fr)_minmax(0,1.15fr)_124px_106px] md:items-center md:gap-5"
              >
                <span className="font-display text-sm font-bold text-primary">{project.num}</span>

                <div>
                  <p className="font-display text-2xl leading-tight font-bold">{project.title}</p>
                  <p className="mt-1.5 text-[13px] text-muted">{loc.role}</p>
                </div>

                <p className="text-sm leading-relaxed text-muted">{loc.summary}</p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="rounded-full border border-divider px-2.5 py-0.5 text-[11px] text-muted">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="md:text-right">
                  <span
                    className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.06em] uppercase"
                    style={{ color: inProgress ? 'var(--color-primary)' : 'var(--color-muted)' }}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: inProgress ? 'var(--color-primary)' : 'var(--color-muted)' }}
                    />
                    {loc.status}
                  </span>
                  <p className="mt-2 text-xs text-primary">{t.projects.open} →</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
