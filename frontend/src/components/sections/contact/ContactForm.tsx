import { useContactForm } from '../../../hooks/useContactForm'
import { useLang } from '../../../hooks/useLang'
import { COPY } from '../../../lib/copy'
import { FormField } from '../../ui/FormField'

export function ContactForm() {
  const { form, status, slow, handleChange, handleSubmit } = useContactForm()
  const [lang] = useLang()
  const t = COPY[lang].contact

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <FormField label={t.name} name="name" value={form.name} onChange={(value) => handleChange('name', value)} required />
      <FormField
        label={t.email}
        name="email"
        type="email"
        value={form.email}
        onChange={(value) => handleChange('email', value)}
        required
      />
      <FormField
        label={t.message}
        name="message"
        multiline
        value={form.message}
        onChange={(value) => handleChange('message', value)}
        required
      />

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="rounded-lg px-5 py-3 font-display text-sm font-bold disabled:cursor-not-allowed disabled:opacity-50"
        style={{ background: 'var(--color-primary)', color: 'var(--color-ink)' }}
      >
        {status === 'submitting' ? t.sending : t.send}
      </button>

      {status === 'submitting' && slow && <p className="text-sm text-muted">{t.warming}</p>}
      {status === 'success' && <p className="text-sm text-emerald-400">{t.sent}</p>}
      {status === 'error' && (
        <p className="text-sm text-red-400">
          {lang === 'pt' ? 'Não foi possível enviar sua mensagem. Tente novamente.' : 'Could not send your message. Please try again.'}
        </p>
      )}
    </form>
  )
}
