import { useState } from 'react'
import type { Project } from '../../../types/project'
import { TechBadge } from '../../ui/TechBadge'

interface ProjectCardProps {
  project: Project
}

/**
 * Hover reveals the tech stack + description overlay (group-hover).
 * Since hover doesn't exist on touch devices, clicking/tapping the card
 * toggles the same overlay via local `open` state.
 */
export function ProjectCard({ project }: ProjectCardProps) {
  const [open, setOpen] = useState(false)

  function toggle() {
    setOpen((value) => !value)
  }

  return (
    <div
      className="group relative flex h-64 cursor-pointer flex-col justify-end overflow-hidden rounded-xl bg-surface p-5 ring-1 ring-white/10 transition-shadow hover:shadow-xl hover:shadow-primary/10"
      role="button"
      tabIndex={0}
      onClick={toggle}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          toggle()
        }
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-surface to-surface" />

      <div className="relative z-10">
        <span className="text-xs font-medium uppercase tracking-wide text-muted">
          {project.source === 'github' ? 'GitHub' : 'Projeto'}
          {project.stars != null && ` · ★ ${project.stars}`}
        </span>
        <h3 className="mt-1 text-lg font-semibold text-white">{project.title}</h3>
      </div>

      <div
        className={`absolute inset-0 z-20 flex flex-col justify-end gap-3 bg-gradient-to-t from-black/95 via-black/85 to-black/50 p-5 opacity-0 translate-y-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0 ${
          open ? 'opacity-100 translate-y-0' : ''
        }`}
      >
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        {project.description && (
          <p className="line-clamp-4 text-sm text-slate-200">{project.description}</p>
        )}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>
        <div className="flex gap-4 pt-1 text-sm">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
              onClick={(event) => event.stopPropagation()}
            >
              Repositório
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
              onClick={(event) => event.stopPropagation()}
            >
              Ver online
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
