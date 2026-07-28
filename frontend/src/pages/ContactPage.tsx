import { PageLayout } from '../components/layout/PageLayout'
import { Section } from '../components/layout/Section'
import { ContactForm } from '../components/sections/contact/ContactForm'

export function ContactPage() {
  return (
    <PageLayout>
      <Section id="contact" title="Contato" subtitle="Vamos conversar sobre seu próximo projeto.">
        <ContactForm />
      </Section>
    </PageLayout>
  )
}
