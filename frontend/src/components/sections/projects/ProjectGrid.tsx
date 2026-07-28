import { useProjects } from '../../../hooks/useProjects'
import { Spinner } from '../../ui/Spinner'
import { ProjectCard } from './ProjectCard'

interface ProjectGridProps {
  /** Caps how many projects render, e.g. for a "featured" preview on the home page. */
  limit?: number
}

export function ProjectGrid({ limit }: ProjectGridProps = {}) {
  const { projects, loading, error } = useProjects()

  if (loading) {
    return (
      <div className="flex justify-center py-16">
        <Spinner />
      </div>
    )
  }

  if (error) {
    return <p className="text-center text-muted">{error}</p>
  }

  if (projects.length === 0) {
    return <p className="text-center text-muted">Nenhum projeto encontrado ainda.</p>
  }

  const visibleProjects = limit ? projects.slice(0, limit) : projects

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {visibleProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
