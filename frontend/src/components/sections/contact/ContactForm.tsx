import { useContactForm } from '../../../hooks/useContactForm'
import { FormField } from '../../ui/FormField'
import { Button } from '../../ui/Button'

export function ContactForm() {
  const { form, status, errorMessage, handleChange, handleSubmit } = useContactForm()

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex max-w-xl flex-col gap-4">
      <FormField
        label="Nome"
        name="name"
        value={form.name}
        onChange={(value) => handleChange('name', value)}
        required
      />
      <FormField
        label="E-mail"
        name="email"
        type="email"
        value={form.email}
        onChange={(value) => handleChange('email', value)}
        required
      />
      <FormField
        label="Mensagem"
        name="message"
        multiline
        value={form.message}
        onChange={(value) => handleChange('message', value)}
        required
      />

      <Button type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Enviando...' : 'Enviar mensagem'}
      </Button>

      {status === 'success' && (
        <p className="text-sm text-emerald-400">Mensagem enviada! Vou te responder em breve.</p>
      )}
      {status === 'error' && <p className="text-sm text-red-400">{errorMessage}</p>}
    </form>
  )
}
