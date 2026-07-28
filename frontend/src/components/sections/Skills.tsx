import { Section } from '../layout/Section'
import { TechBadge } from '../ui/TechBadge'
import { STACK } from '../../lib/constants'

export function Skills() {
  return (
    <Section id="stack" title="Stack">
      <div className="flex flex-wrap justify-center gap-3">
        {STACK.map((tech) => (
          <TechBadge key={tech} tech={tech} size="md" />
        ))}
      </div>
    </Section>
  )
}
