import type { PropsWithChildren } from 'react'

interface SectionProps {
  id: string
  title?: string
  subtitle?: string
  className?: string
}

export function Section({ id, title, subtitle, className = '', children }: PropsWithChildren<SectionProps>) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-6 py-20 md:px-10 ${className}`}>
      {title && (
        <div className="mb-10 text-center">
          <h2 className="section-heading">{title}</h2>
          {subtitle && <p className="mx-auto mt-3 max-w-2xl text-muted">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  )
}
