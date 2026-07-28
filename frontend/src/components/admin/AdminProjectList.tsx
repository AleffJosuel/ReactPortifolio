import { useState } from 'react'
import { adminDeleteProject } from '../../api/projects'
import type { Project } from '../../types/project'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'

interface AdminProjectListProps {
  projects: Project[]
  adminToken: string
  onChanged: () => void
}

export function AdminProjectList({ projects, adminToken, onChanged }: AdminProjectListProps) {
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const manualProjects = projects.filter((project) => project.source === 'manual')

  async function handleDelete(id: string) {
    setDeletingId(id)
    try {
      await adminDeleteProject(id, adminToken)
      onChanged()
    } finally {
      setDeletingId(null)
    }
  }

  if (manualProjects.length === 0) {
    return <p className="text-muted">Nenhum projeto manual cadastrado ainda.</p>
  }

  return (
    <div className="flex flex-col gap-3">
      {manualProjects.map((project) => (
        <Card key={project.id} className="flex items-center justify-between gap-4 p-4">
          <div>
            <p className="font-medium text-white">{project.title}</p>
            <p className="text-sm text-muted">{project.techStack.join(', ')}</p>
          </div>
          <Button variant="ghost" disabled={deletingId === project.id} onClick={() => handleDelete(project.id)}>
            {deletingId === project.id ? 'Excluindo...' : 'Excluir'}
          </Button>
        </Card>
      ))}
    </div>
  )
}
