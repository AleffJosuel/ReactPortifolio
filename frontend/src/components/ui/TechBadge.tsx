import { Badge } from './Badge'
import { getTechStyle } from '../../lib/techIcons'

export function TechBadge({ tech, size }: { tech: string; size?: 'sm' | 'md' }) {
  const style = getTechStyle(tech)
  return (
    <Badge className={style.className} size={size}>
      {style.label}
    </Badge>
  )
}
