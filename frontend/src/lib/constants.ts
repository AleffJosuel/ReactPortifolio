// Único lugar com dados pessoais do portfólio. Edite aqui para atualizar
// nome, bio e links em todo o site.
export const SITE = {
  name: 'Aleff Josuel',
  role: 'Desenvolvedor Full Stack',
  tagline: 'Construo aplicações web modernas com React, TypeScript e Java.',
  // TODO: personalize esta bio com sua trajetória e áreas de interesse
  bio:
    'Sou desenvolvedor full stack, com experiência em React, TypeScript, ' +
    'Java com Spring Boot e bancos de dados relacionais. Gosto de resolver ' +
    'problemas reais escrevendo código limpo, testável e bem estruturado.',
  // Versão curta usada no teaser da home; a versão completa (acima) fica na página /sobre.
  shortBio:
    'Desenvolvedor full stack com experiência em React, TypeScript e Java/Spring Boot. ' +
    'Gosto de resolver problemas reais com código limpo e bem estruturado.',
  email: 'aleffjosuel321@gmail.com',
  githubUsername: 'AleffJosuel',
  githubUrl: 'https://github.com/AleffJosuel',
  // TODO: adicionar link do LinkedIn, se desejar
  linkedinUrl: '',
}

export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Projetos', href: '/projetos' },
  { label: 'Contato', href: '/contato' },
] as const

// Stack exibida na home. Usa os mesmos identificadores de getTechStyle (lib/techIcons)
// para herdar a cor por tecnologia.
export const STACK = [
  'React',
  'TypeScript',
  'JavaScript',
  'Java',
  'Spring Boot',
  'PostgreSQL',
  'Tailwind CSS',
  'Supabase',
] as const
