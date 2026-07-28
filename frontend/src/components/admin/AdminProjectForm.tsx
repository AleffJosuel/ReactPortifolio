import { useState, type FormEvent } from 'react'
import { adminCreateProject } from '../../api/projects'
import { FormField } from '../ui/FormField'
import { Button } from '../ui/Button'

interface AdminProjectFormProps {
  adminToken: string
  onCreated: () => void
}

interface FormState {
  title: string
  description: string
  techStack: string
  repoUrl: string
  liveUrl: string
  imageUrl: string
}

const EMPTY_FORM: FormState = {
  title: '',
  description: '',
  techStack: '',
  repoUrl: '',
  liveUrl: '',
  imageUrl: '',
}

export function AdminProjectForm({ adminToken, onCreated }: AdminProjectFormProps) {
  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle')

  function update(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setStatus('submitting')

    try {
      await adminCreateProject(
        {
          title: form.title,
          description: form.description || undefined,
          techStack: form.techStack
            .split(',')
            .map((tech) => tech.trim())
            .filter(Boolean),
          repoUrl: form.repoUrl || undefined,
          liveUrl: form.liveUrl || undefined,
          imageUrl: form.imageUrl || undefined,
        },
        adminToken
      )
      setForm(EMPTY_FORM)
      setStatus('idle')
      onCreated()
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <FormField label="Título" name="title" value={form.title} onChange={(v) => update('title', v)} required />
      <FormField
        label="Descrição (como o projeto foi feito)"
        name="description"
        multiline
        value={form.description}
        onChange={(v) => update('description', v)}
      />
      <FormField
        label="Tecnologias (separadas por vírgula)"
        name="techStack"
        value={form.techStack}
        onChange={(v) => update('techStack', v)}
        placeholder="React, TypeScript, Spring Boot"
      />
      <FormField
        label="URL do repositório"
        name="repoUrl"
        value={form.repoUrl}
        onChange={(v) => update('repoUrl', v)}
      />
      <FormField
        label="URL do projeto no ar"
        name="liveUrl"
        value={form.liveUrl}
        onChange={(v) => update('liveUrl', v)}
      />
      <FormField
        label="URL da imagem"
        name="imageUrl"
        value={form.imageUrl}
        onChange={(v) => update('imageUrl', v)}
      />

      <Button type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Salvando...' : 'Adicionar projeto'}
      </Button>
      {status === 'error' && <p className="text-sm text-red-400">Não foi possível salvar o projeto.</p>}
    </form>
  )
}
