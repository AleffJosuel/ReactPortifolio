import { request } from './client'
import type { Project } from '../types/project'

export interface ManualProjectPayload {
  title: string
  description?: string
  techStack: string[]
  repoUrl?: string
  liveUrl?: string
  imageUrl?: string
}

/** Manual project ids are formatted "manual-{dbId}" by the backend (see ProjectMapper). */
function manualDbId(projectId: string): string {
  return projectId.replace(/^manual-/, '')
}

export function fetchProjects(): Promise<Project[]> {
  return request<Project[]>('/api/projects')
}

export function adminCreateProject(payload: ManualProjectPayload, adminToken: string): Promise<Project> {
  return request<Project>('/api/projects', {
    method: 'POST',
    body: JSON.stringify(payload),
    adminToken,
  })
}

export function adminUpdateProject(
  projectId: string,
  payload: ManualProjectPayload,
  adminToken: string
): Promise<Project> {
  return request<Project>(`/api/projects/${manualDbId(projectId)}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
    adminToken,
  })
}

export function adminDeleteProject(projectId: string, adminToken: string): Promise<void> {
  return request<void>(`/api/projects/${manualDbId(projectId)}`, {
    method: 'DELETE',
    adminToken,
  })
}
