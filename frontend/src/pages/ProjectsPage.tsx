import { PageLayout } from '../components/layout/PageLayout'
import { Section } from '../components/layout/Section'
import { ProjectGrid } from '../components/sections/projects/ProjectGrid'

export function ProjectsPage() {
  return (
    <PageLayout>
      <Section
        id="projects"
        title="Projetos"
        subtitle="Repositórios sincronizados do GitHub e projetos adicionados manualmente. Passe o mouse (ou toque) em um card para ver as tecnologias usadas e como foi feito."
      >
        <ProjectGrid />
      </Section>
    </PageLayout>
  )
}
