import type { ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
}

const VARIANT_CLASSES: Record<Variant, string> = {
  primary: 'bg-primary text-slate-950 hover:bg-primary-dark',
  secondary: 'bg-surface text-white ring-1 ring-white/10 hover:bg-surface-hover',
  ghost: 'bg-transparent text-muted hover:text-white',
}

/** Shared with any non-<button> element that needs to look like a Button (e.g. a mailto: link). */
export function buttonClassName(variant: Variant = 'primary', className = ''): string {
  return `inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${VARIANT_CLASSES[variant]} ${className}`
}

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  return <button className={buttonClassName(variant, className)} {...props} />
}
