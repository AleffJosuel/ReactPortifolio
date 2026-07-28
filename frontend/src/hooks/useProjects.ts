import { useCallback, useEffect, useState } from 'react'
import { fetchProjects } from '../api/projects'
import type { Project } from '../types/project'

interface UseProjectsResult {
  projects: Project[]
  loading: boolean
  error: string | null
  refetch: () => void
}

export function useProjects(): UseProjectsResult {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [reloadToken, setReloadToken] = useState(0)

  useEffect(() => {
    let cancelled = false

    setLoading(true)
    setError(null)

    fetchProjects()
      .then((data) => {
        if (!cancelled) setProjects(data)
      })
      .catch(() => {
        if (!cancelled) setError('Não foi possível carregar os projetos agora.')
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [reloadToken])

  const refetch = useCallback(() => setReloadToken((token) => token + 1), [])

  return { projects, loading, error, refetch }
}
