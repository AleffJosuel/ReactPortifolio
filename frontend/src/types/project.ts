export type ProjectSource = 'github' | 'manual'

export interface Project {
  id: string
  source: ProjectSource
  title: string
  description: string | null
  techStack: string[]
  repoUrl: string | null
  liveUrl: string | null
  imageUrl: string | null
  stars: number | null
  updatedAt: string
}
