import type { PropsWithChildren } from 'react'

type BadgeSize = 'sm' | 'md'

interface BadgeProps {
  className?: string
  size?: BadgeSize
}

const SIZE_CLASSES: Record<BadgeSize, string> = {
  sm: 'px-2.5 py-1 text-xs',
  md: 'px-3.5 py-1.5 text-sm',
}

export function Badge({ className = '', size = 'sm', children }: PropsWithChildren<BadgeProps>) {
  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ring-1 ring-inset ${SIZE_CLASSES[size]} ${className}`}
    >
      {children}
    </span>
  )
}
