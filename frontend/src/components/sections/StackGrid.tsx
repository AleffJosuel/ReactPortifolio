import { useLang } from '../../hooks/useLang'
import { COPY } from '../../lib/copy'
import { STACK_ITEMS } from '../../lib/stackItems'
import { PROJECT_CASES } from '../../lib/projectCases'

interface StackGridProps {
  onFilter: (index: number) => void
}

export function StackGrid({ onFilter }: StackGridProps) {
  const [lang] = useLang()
  const t = COPY[lang]

  return (
    <section id="stack" className="border-b border-divider">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-10">
        <div className="mb-6 flex flex-wrap items-baseline gap-5">
          <p className="text-xs tracking-[0.14em] text-muted uppercase">{t.stack.sectionLabel}</p>
          <p className="text-[13px] text-muted">{t.stack.hint}</p>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-divider bg-divider md:grid-cols-4">
          {STACK_ITEMS.map((item) => {
            const count = PROJECT_CASES.filter((p) =>
              p.tech.some((tech) => tech.toLowerCase() === item.name.toLowerCase()),
            ).length
            const filterIndex = t.projects.filters.findIndex((f) => f.toLowerCase() === item.name.toLowerCase())
            const countLabel = `${count} ${count === 1 ? t.stack.project : t.stack.projects}`

            return (
              <a
                key={item.name}
                href="#projetos"
                onClick={() => {
                  if (filterIndex > 0) onFilter(filterIndex)
                }}
                className="flex flex-col gap-1 bg-background p-5 text-text transition-colors hover:bg-surface"
              >
                <span className="flex items-baseline justify-between gap-2">
                  <span className="font-display text-[17px] font-bold">{item.name}</span>
                  <span className="text-[11px] text-primary">{countLabel}</span>
                </span>
                <span className="text-xs text-muted">{item.note[lang]}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
