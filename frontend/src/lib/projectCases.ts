interface LocalizedCase {
  role: string
  status: string
  summary: string
  proves: string
  how: string[]
  next: string
}

export interface ProjectCase {
  id: string
  num: string
  title: string
  repoUrl: string
  tech: string[]
  /** Optional illustrative image shown at the top of the case panel (served from public/). */
  image?: string
  pt: LocalizedCase
  en: LocalizedCase
}

// Case content written from the real READMEs/source of each public repo
// (github.com/AleffJosuel). Kept as static data -- no extra network call --
// since this copy (role, "how it was built", next step) doesn't come from
// the API; only the live project list (GET /api/projects) does.
export const PROJECT_CASES: ProjectCase[] = [
  {
    id: 'portfolio',
    num: '01',
    title: 'ReactPortifolio',
    repoUrl: 'https://github.com/AleffJosuel/ReactPortifolio',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Java', 'Spring Boot', 'Supabase'],
    image: '/cases/reactportfolio.jpg',
    pt: {
      role: 'Full stack · monorepo',
      status: 'No ar',
      summary: 'Portfólio pessoal: front em React + TypeScript, API em Spring Boot e Postgres no Supabase.',
      proves: 'Mostra que sei ligar front, API e banco no mesmo projeto — e decidir o que não usar.',
      how: [
        'A API GET /api/projects junta os repositórios públicos do GitHub (cache de 15 min) com projetos cadastrados à mão no Supabase.',
        'Área /admin protegida pelo header X-Admin-Token: o token no front é conveniência de UI, a validação real é no backend.',
        'Roteador próprio de 5 rotas lendo o pathname, em vez de trazer uma biblioteca de rotas para um site desse tamanho.',
        'Front na Vercel, backend empacotado em Docker no Render, schema versionado em migrations SQL.',
      ],
      next: 'Adicionar testes automatizados no backend e trocar screenshots reais pelos placeholders dos projetos.',
    },
    en: {
      role: 'Full stack · monorepo',
      status: 'Live',
      summary: 'Personal portfolio: React + TypeScript front end, Spring Boot API and Postgres on Supabase.',
      proves: 'Shows I can wire front end, API and database together — and decide what not to use.',
      how: [
        'GET /api/projects merges the public GitHub repositories (cached for 15 min) with projects added by hand in Supabase.',
        'The /admin area is protected by the X-Admin-Token header: the front-end token is UI convenience, real validation is server side.',
        'A 5-route router of my own reading the pathname, instead of pulling a routing library into a site this size.',
        'Front end on Vercel, backend packaged with Docker on Render, schema versioned in SQL migrations.',
      ],
      next: 'Add automated backend tests and swap the project placeholders for real screenshots.',
    },
  },
  {
    id: 'task',
    num: '02',
    title: 'TaskManagerApi',
    repoUrl: 'https://github.com/AleffJosuel/TaskManagerApi',
    tech: ['Java', 'Spring Boot', 'JPA', 'PostgreSQL'],
    image: '/cases/taskmanager.png',
    pt: {
      role: 'Back-end · Java',
      status: 'Em construção',
      summary: 'API REST de tarefas em Spring Boot, com domínio, persistência e regras separados em camadas.',
      proves: 'Mostra modelagem de domínio e organização em camadas, não só CRUD copiado.',
      how: [
        'Spring Boot 4 com spring-boot-starter-data-jpa e starter-validation; Postgres configurado por variáveis de ambiente.',
        'Entidade Task com status (TODO, IN_PROGRESS, DONE), prioridade (LOW, MEDIUM, HIGH), data de criação automática e vencimento.',
        'TaskRepository (JpaRepository) com buscas por status e por prioridade.',
        'TaskService com o CRUD, status padrão TODO na criação e TaskNotFoundException quando o id não existe.',
      ],
      next: 'Controller REST (GET/POST/PUT/DELETE /tasks), @ControllerAdvice para erros e testes.',
    },
    en: {
      role: 'Back end · Java',
      status: 'In progress',
      summary: 'Task REST API in Spring Boot, with domain, persistence and rules split into layers.',
      proves: 'Shows domain modelling and layering, not a copied CRUD tutorial.',
      how: [
        'Spring Boot 4 with spring-boot-starter-data-jpa and starter-validation; Postgres configured through environment variables.',
        'Task entity with status (TODO, IN_PROGRESS, DONE), priority (LOW, MEDIUM, HIGH), automatic creation date and a due date.',
        'TaskRepository (JpaRepository) with queries by status and by priority.',
        'TaskService holds the CRUD, defaults new tasks to TODO and throws TaskNotFoundException for unknown ids.',
      ],
      next: 'REST controller (GET/POST/PUT/DELETE /tasks), @ControllerAdvice for errors, and tests.',
    },
  },
  {
    id: 'ts',
    num: '03',
    title: 'TypeScriptFullstack',
    repoUrl: 'https://github.com/AleffJosuel/TypeScriptFullstack',
    tech: ['JavaScript', 'Express', 'HTML', 'CSS'],
    image: '/cases/typescript.svg',
    pt: {
      role: 'Node · Express',
      status: 'Em construção',
      summary: 'Servidor Node feito do zero para entender rotas, middlewares e arquivos estáticos.',
      proves: 'Mostra o básico do servidor sem framework de front — entendo o que acontece embaixo.',
      how: [
        'Servidor criado com express() em index.js.',
        'express.static serve a pasta public/ (HTML, CSS e JS puro), que consome a API pelo navegador.',
        'Rota GET /health como health check, para confirmar que o servidor está no ar.',
        'Ainda sem banco e sem TypeScript — a ideia é evoluir aos poucos.',
      ],
      next: 'Adicionar tipagem TypeScript e persistência de dados.',
    },
    en: {
      role: 'Node · Express',
      status: 'In progress',
      summary: 'A Node server built from scratch to understand routes, middleware and static files.',
      proves: 'Shows the server basics without a front-end framework — I know what runs underneath.',
      how: [
        'Server created with express() in index.js.',
        'express.static serves the public/ folder (plain HTML, CSS and JS) which calls the API from the browser.',
        'A GET /health route as a health check, to confirm the server is up.',
        'No database and no TypeScript yet — the plan is to grow it step by step.',
      ],
      next: 'Add TypeScript typing and data persistence.',
    },
  },
  {
    id: 'primeira',
    num: '04',
    title: 'minha-primeira-api',
    repoUrl: 'https://github.com/AleffJosuel/minha-primeira-api',
    tech: ['JavaScript', 'Express'],
    image: '/cases/primeira-api.jpg',
    pt: {
      role: 'Back-end · JavaScript',
      status: 'Estudo',
      summary: 'Minha primeira API — um servidor Express minúsculo para praticar back-end antes de migrar para TypeScript.',
      proves: 'Mostra de onde eu saí: dá para comparar com o TaskManagerApi e ver a evolução.',
      how: [
        'Servidor Express simples com um endpoint GET /health e arquivos estáticos servidos da pasta public/.',
        'Primeiro contato com estrutura de projeto Node.js e requisições HTTP.',
        'Mantida no ar como registro de onde a trajetória começou.',
      ],
      next: 'Reescrever com TypeScript e comparar com os projetos mais recentes neste case.',
    },
    en: {
      role: 'Back end · JavaScript',
      status: 'Study',
      summary: 'My very first API — a tiny Express server to practice back-end basics before moving to TypeScript.',
      proves: 'Shows where I started: compare it with TaskManagerApi and the progress is visible.',
      how: [
        'A simple Express server with a GET /health endpoint and static files served from public/.',
        'First contact with Node.js project structure and HTTP requests.',
        'Kept online as a record of where the path began.',
      ],
      next: 'Rewrite it with TypeScript and compare it with the more recent projects in this case.',
    },
  },
]
