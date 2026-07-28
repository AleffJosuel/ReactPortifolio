import { Section } from '../layout/Section'
import { Button } from '../ui/Button'
import { navigate } from '../../lib/router'

export function CallToAction() {
  return (
    <Section id="cta" className="text-center">
      <h2 className="section-heading">Vamos conversar?</h2>
      <p className="mx-auto mt-3 max-w-xl text-muted">
        Estou aberto a novas oportunidades e projetos. Envie uma mensagem e responderei o quanto antes.
      </p>
      <div className="mt-8">
        <Button onClick={() => navigate('/contato')}>Entrar em contato</Button>
      </div>
    </Section>
  )
}
