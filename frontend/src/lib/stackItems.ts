export interface StackItem {
  name: string
  note: { pt: string; en: string }
}

// Grid shown in the "Stack" section. Project counts per technology are
// derived from PROJECT_CASES at render time, not hardcoded here.
export const STACK_ITEMS: StackItem[] = [
  { name: 'React', note: { pt: 'Interfaces do portfólio', en: 'Portfolio interfaces' } },
  { name: 'TypeScript', note: { pt: 'Tipagem no front', en: 'Typing on the front end' } },
  { name: 'JavaScript', note: { pt: 'Node e scripts', en: 'Node and scripts' } },
  { name: 'Java', note: { pt: 'Back-end principal', en: 'Main back end' } },
  { name: 'Spring Boot', note: { pt: 'APIs REST e JPA', en: 'REST APIs and JPA' } },
  { name: 'PostgreSQL', note: { pt: 'Modelagem relacional', en: 'Relational modelling' } },
  { name: 'Tailwind CSS', note: { pt: 'Estilo utilitário', en: 'Utility-first styling' } },
  { name: 'Supabase', note: { pt: 'Postgres gerenciado', en: 'Managed Postgres' } },
]

export interface LanguageStat {
  name: string
  count: number
  color: string
}

// Primary languages across the 4 featured repos (2 Java, 2 JavaScript, 1 TypeScript --
// ReactPortifolio and TypeScriptFullstack/minha-primeira-api count JS/TS once each,
// ReactPortifolio and TaskManagerApi both use Java for their backend).
export const LANGUAGE_STATS: LanguageStat[] = [
  { name: 'Java', count: 2, color: '#fdba74' },
  { name: 'JavaScript', count: 2, color: '#fde047' },
  { name: 'TypeScript', count: 1, color: '#93c5fd' },
]

export const HERO_STATS = {
  publicRepos: 5,
  languagesInUse: 3,
  projectsInProgress: 2,
}
