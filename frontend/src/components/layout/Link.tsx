import type { AnchorHTMLAttributes, MouseEvent } from 'react'
import { navigate } from '../../lib/router'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string
}

/** In-app navigation without a full page reload; falls back to a normal browser navigation for modified clicks. */
export function Link({ to, onClick, ...rest }: LinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (event.defaultPrevented || event.button !== 0) return
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

    event.preventDefault()
    navigate(to)
    onClick?.(event)
  }

  return <a href={to} onClick={handleClick} {...rest} />
}
