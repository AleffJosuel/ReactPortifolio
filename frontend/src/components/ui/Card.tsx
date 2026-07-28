import type { PropsWithChildren } from 'react'

export function Card({ className = '', children }: PropsWithChildren<{ className?: string }>) {
  return <div className={`card-base ${className}`}>{children}</div>
}
