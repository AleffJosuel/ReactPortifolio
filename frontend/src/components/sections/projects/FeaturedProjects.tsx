import { Section } from '../../layout/Section'
import { Link } from '../../layout/Link'
import { ProjectGrid } from './ProjectGrid'

export function FeaturedProjects() {
  return (
    <Section id="featured-projects" title="Projetos em destaque">
      <ProjectGrid limit={3} />
      <div className="mt-10 text-center">
        <Link to="/projetos" className="text-sm font-medium text-primary hover:underline">
          Ver todos os projetos →
        </Link>
      </div>
    </Section>
  )
}
