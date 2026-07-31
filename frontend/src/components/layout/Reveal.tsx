import type { PropsWithChildren } from 'react'
import { useReveal } from '../../hooks/useReveal'

/** Wraps a section so it fades/slides in the first time it scrolls into view. */
export function Reveal({ children }: PropsWithChildren) {
  const { ref, revealed } = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      style={{
        opacity: revealed ? 1 : 0,
        animation: revealed ? 'reveal-up 640ms cubic-bezier(0.22,1,0.36,1) both' : undefined,
      }}
    >
      {children}
    </div>
  )
}
