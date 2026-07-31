import { useLang } from '../../hooks/useLang'
import { COPY } from '../../lib/copy'
import { TIMELINE } from '../../lib/timeline'

interface TimelineProps {
  step: number
  onStepChange: (index: number) => void
}

export function Timeline({ step, onStepChange }: TimelineProps) {
  const [lang] = useLang()
  const t = COPY[lang]
  const activeStep = TIMELINE[step]

  return (
    <section id="trajetoria" className="border-b border-divider">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1fr_1.1fr] md:gap-14 md:px-10">
        <div>
          <p className="mb-6 text-xs tracking-[0.14em] text-muted uppercase">{t.timeline.sectionLabel}</p>
          {TIMELINE.map((item, i) => {
            const isActive = i === step
            return (
              <button
                key={item.step.pt}
                type="button"
                onClick={() => onStepChange(i)}
                className="grid w-full grid-cols-[12px_1fr] items-start gap-4 border-t border-divider bg-transparent px-1 py-4.5 text-left transition-colors hover:bg-surface"
              >
                <span
                  className="mt-1.5 h-2.5 w-2.5 rounded-full border-2"
                  style={{
                    borderColor: 'var(--color-primary)',
                    background: isActive ? 'var(--color-primary)' : 'transparent',
                  }}
                />
                <span>
                  <span className="block text-[11px] tracking-[0.1em] text-muted uppercase">{item.step[lang]}</span>
                  <span
                    className="mt-1 block font-display text-lg font-bold"
                    style={{ color: isActive ? 'var(--color-primary)' : 'var(--color-text)' }}
                  >
                    {item.title[lang]}
                  </span>
                </span>
              </button>
            )
          })}
        </div>

        <div className="self-start rounded-xl border border-divider bg-surface p-9">
          <p className="text-[11px] tracking-[0.12em] text-primary uppercase">{activeStep.step[lang]}</p>
          <h3 className="mt-3.5 text-2xl leading-tight font-bold sm:text-[30px]">{activeStep.title[lang]}</h3>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-[17px]">{activeStep.body[lang]}</p>
        </div>
      </div>
    </section>
  )
}
