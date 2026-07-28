import { useState } from 'react'
import { deleteContactMessage, updateContactResponded } from '../../api/contact'
import { buildMailtoLink } from '../../lib/mailto'
import type { ContactMessage } from '../../types/contact'
import { Badge } from '../ui/Badge'
import { Button, buttonClassName } from '../ui/Button'
import { Card } from '../ui/Card'

interface AdminMessageListProps {
  messages: ContactMessage[]
  adminToken: string
  onChanged: () => void
}

export function AdminMessageList({ messages, adminToken, onChanged }: AdminMessageListProps) {
  const [pendingId, setPendingId] = useState<number | null>(null)

  async function toggleResponded(message: ContactMessage) {
    setPendingId(message.id)
    try {
      await updateContactResponded(message.id, !message.responded, adminToken)
      onChanged()
    } finally {
      setPendingId(null)
    }
  }

  async function handleDelete(id: number) {
    setPendingId(id)
    try {
      await deleteContactMessage(id, adminToken)
      onChanged()
    } finally {
      setPendingId(null)
    }
  }

  if (messages.length === 0) {
    return <p className="text-muted">Nenhuma mensagem recebida ainda.</p>
  }

  return (
    <div className="flex flex-col gap-3">
      {messages.map((message) => {
        const isPending = pendingId === message.id

        return (
          <Card key={message.id} className="flex flex-col gap-3 p-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="font-medium text-white">{message.name}</p>
                <p className="text-sm text-muted">{message.email}</p>
              </div>
              <Badge
                className={
                  message.responded
                    ? 'bg-emerald-400/10 text-emerald-300 ring-emerald-400/30'
                    : 'bg-yellow-400/10 text-yellow-300 ring-yellow-400/30'
                }
              >
                {message.responded ? 'Respondida' : 'Pendente'}
              </Badge>
            </div>

            <p className="whitespace-pre-wrap text-sm text-slate-200">{message.message}</p>
            <p className="text-xs text-muted">{new Date(message.createdAt).toLocaleString('pt-BR')}</p>

            <div className="flex flex-wrap gap-3 pt-1">
              <a href={buildMailtoLink(message.email, message.name)} className={buttonClassName('secondary')}>
                Responder por e-mail
              </a>
              <Button type="button" variant="ghost" disabled={isPending} onClick={() => toggleResponded(message)}>
                {message.responded ? 'Marcar como pendente' : 'Marcar como respondida'}
              </Button>
              <Button type="button" variant="ghost" disabled={isPending} onClick={() => handleDelete(message.id)}>
                Excluir
              </Button>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
