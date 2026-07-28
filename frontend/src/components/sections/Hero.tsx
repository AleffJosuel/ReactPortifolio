import { SITE } from '../../lib/constants'
import { navigate } from '../../lib/router'
import { Button } from '../ui/Button'

export function Hero() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-medium uppercase tracking-widest text-primary">{SITE.role}</p>
      <h1 className="mt-4 font-display text-4xl font-bold text-white md:text-6xl">{SITE.name}</h1>
      <p className="mt-6 max-w-xl text-muted">{SITE.tagline}</p>
      <div className="mt-8 flex gap-4">
        <Button onClick={() => navigate('/projetos')}>Ver projetos</Button>
        <Button variant="secondary" onClick={() => navigate('/contato')}>
          Contato
        </Button>
      </div>
    </section>
  )
}
