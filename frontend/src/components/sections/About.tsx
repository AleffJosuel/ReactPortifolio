import { Section } from '../layout/Section'
import { Link } from '../layout/Link'
import { SITE } from '../../lib/constants'

interface AboutProps {
  /** Shows the short bio + a link to /sobre instead of the full text (used on the home page). */
  teaser?: boolean
}

export function About({ teaser = false }: AboutProps) {
  return (
    <Section id="about" title="Sobre mim">
      <p className="mx-auto max-w-2xl text-center leading-relaxed text-muted">
        {teaser ? SITE.shortBio : SITE.bio}
      </p>
      {teaser && (
        <div className="mt-6 text-center">
          <Link to="/sobre" className="text-sm font-medium text-primary hover:underline">
            Saiba mais →
          </Link>
        </div>
      )}
    </Section>
  )
}
