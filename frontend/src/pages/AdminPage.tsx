import { useAdminToken } from '../hooks/useAdminToken'
import { useProjects } from '../hooks/useProjects'
import { useContactMessages } from '../hooks/useContactMessages'
import { AdminGate } from '../components/admin/AdminGate'
import { AdminProjectForm } from '../components/admin/AdminProjectForm'
import { AdminProjectList } from '../components/admin/AdminProjectList'
import { AdminMessageList } from '../components/admin/AdminMessageList'

export function AdminPage() {
  const { token, isSet, setToken, clearToken } = useAdminToken()
  const { projects, refetch: refetchProjects } = useProjects()
  const { messages, loading: loadingMessages, error: messagesError, refetch: refetchMessages } =
    useContactMessages(token ?? '')

  if (!isSet || !token) {
    return <AdminGate onSubmit={setToken} />
  }

  const pendingCount = messages.filter((message) => !message.responded).length

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-white">Administração</h1>
        <button type="button" onClick={clearToken} className="text-sm text-muted hover:text-white">
          Sair
        </button>
      </div>

      <div className="mb-12">
        <h2 className="mb-4 text-lg font-medium text-white">Adicionar projeto</h2>
        <AdminProjectForm adminToken={token} onCreated={refetchProjects} />
      </div>

      <div className="mb-12">
        <h2 className="mb-4 text-lg font-medium text-white">Projetos manuais existentes</h2>
        <AdminProjectList projects={projects} adminToken={token} onChanged={refetchProjects} />
      </div>

      <div>
        <h2 className="mb-4 text-lg font-medium text-white">
          Mensagens de contato
          {pendingCount > 0 && <span className="ml-2 text-sm font-normal text-yellow-300">({pendingCount} pendente{pendingCount > 1 ? 's' : ''})</span>}
        </h2>
        {loadingMessages && <p className="text-muted">Carregando mensagens...</p>}
        {messagesError && <p className="text-red-400">{messagesError}</p>}
        {!loadingMessages && !messagesError && (
          <AdminMessageList messages={messages} adminToken={token} onChanged={refetchMessages} />
        )}
      </div>
    </div>
  )
}
