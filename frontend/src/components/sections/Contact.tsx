import { SITE } from '../../lib/constants'
import { COPY } from '../../lib/copy'
import { useLang } from '../../hooks/useLang'
import { useCopyEmail } from '../../hooks/useCopyEmail'
import { ContactForm } from './contact/ContactForm'

export function Contact() {
  const [lang] = useLang()
  const t = COPY[lang].contact
  const { copied, copyEmail } = useCopyEmail()

  return (
    <section id="contato">
      <div className="mx-auto max-w-6xl px-6 py-14 pb-18 md:px-10">
        <div className="rounded-2xl border border-divider bg-surface p-8 sm:p-11">
          <p className="text-xs tracking-[0.14em] text-primary uppercase">{t.sectionLabel}</p>
          <h2 className="mt-4 max-w-[760px] text-3xl leading-tight font-bold sm:text-5xl">{t.heading}</h2>
          <p className="mt-4 max-w-[620px] text-base text-muted sm:text-lg">{t.lead}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${SITE.email}`}
              className="rounded-lg px-5 py-3.5 font-display text-sm font-bold"
              style={{ background: 'var(--color-primary)', color: 'var(--color-ink)' }}
            >
              {SITE.email}
            </a>
            <a
              href={SITE.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-divider px-5 py-3.5 font-display text-sm font-bold text-text hover:bg-surface-hover"
            >
              LinkedIn
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="rounded-lg border border-divider px-5 py-3.5 font-display text-sm font-bold text-text"
            >
              {copied ? t.emailCopied : t.copyEmail}
            </button>
          </div>

          <div className="mt-10 border-t border-divider pt-8">
            <p className="mb-4 text-[11px] tracking-[0.12em] text-muted uppercase">{t.formTitle}</p>
            <div className="max-w-xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
