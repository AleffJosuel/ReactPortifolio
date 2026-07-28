interface TechStyle {
  label: string
  className: string
}

// Única fonte de estilos por tecnologia. Adicione uma entrada aqui para
// dar uma cor específica a uma nova tech; qualquer uma não listada cai
// no estilo padrão (DEFAULT_STYLE) automaticamente.
const TECH_STYLES: Record<string, string> = {
  javascript: 'bg-yellow-400/10 text-yellow-300 ring-yellow-400/30',
  typescript: 'bg-blue-400/10 text-blue-300 ring-blue-400/30',
  java: 'bg-orange-400/10 text-orange-300 ring-orange-400/30',
  python: 'bg-emerald-400/10 text-emerald-300 ring-emerald-400/30',
  react: 'bg-cyan-400/10 text-cyan-300 ring-cyan-400/30',
  'spring-boot': 'bg-green-400/10 text-green-300 ring-green-400/30',
  spring: 'bg-green-400/10 text-green-300 ring-green-400/30',
  'tailwind-css': 'bg-sky-400/10 text-sky-300 ring-sky-400/30',
  tailwindcss: 'bg-sky-400/10 text-sky-300 ring-sky-400/30',
  html: 'bg-red-400/10 text-red-300 ring-red-400/30',
  css: 'bg-indigo-400/10 text-indigo-300 ring-indigo-400/30',
  supabase: 'bg-emerald-400/10 text-emerald-300 ring-emerald-400/30',
  postgresql: 'bg-blue-400/10 text-blue-300 ring-blue-400/30',
  'c#': 'bg-purple-400/10 text-purple-300 ring-purple-400/30',
  csharp: 'bg-purple-400/10 text-purple-300 ring-purple-400/30',
}

const DEFAULT_CLASS_NAME = 'bg-slate-400/10 text-slate-300 ring-slate-400/30'

export function getTechStyle(tech: string): TechStyle {
  const key = tech.toLowerCase().trim().replace(/\s+/g, '-')
  return { label: tech, className: TECH_STYLES[key] ?? DEFAULT_CLASS_NAME }
}
