interface LocalizedText {
  pt: string
  en: string
}

export interface TimelineStep {
  step: LocalizedText
  title: LocalizedText
  body: LocalizedText
}

export const TIMELINE: TimelineStep[] = [
  {
    step: { pt: 'Passo 01', en: 'Step 01' },
    title: { pt: 'Primeira API, em JavaScript', en: 'First API, in JavaScript' },
    body: {
      pt: 'minha-primeira-api: um servidor Express minúsculo, health check e arquivos estáticos — o ponto onde tudo começou.',
      en: 'minha-primeira-api: a tiny Express server, a health check and static files — where it all started.',
    },
  },
  {
    step: { pt: 'Passo 02', en: 'Step 02' },
    title: { pt: 'Spring Boot e JPA', en: 'Spring Boot and JPA' },
    body: {
      pt: 'TaskManagerApi: entidade Task, repositório com buscas por status e prioridade, serviço com as regras e exceção própria para id inexistente. Primeiro contato real com Java.',
      en: 'TaskManagerApi: Task entity, repository with status and priority queries, service holding the rules and a custom exception for unknown ids. My real first contact with Java.',
    },
  },
  {
    step: { pt: 'Passo 03', en: 'Step 03' },
    title: { pt: 'Node e front sem framework', en: 'Node and a framework-free front end' },
    body: {
      pt: 'TypeScriptFullstack: Express, middlewares, arquivos estáticos e um health check — entender o servidor sem atalhos, com mais estrutura do que a primeira API.',
      en: 'TypeScriptFullstack: Express, middleware, static files and a health check — understanding the server without shortcuts, more structured than the first API.',
    },
  },
  {
    step: { pt: 'Passo 04', en: 'Step 04' },
    title: { pt: 'Full stack de ponta a ponta', en: 'End-to-end full stack' },
    body: {
      pt: 'Este portfólio: React + TypeScript + Tailwind no front, API em Spring Boot, Postgres no Supabase e deploy na Vercel + Render.',
      en: 'This portfolio: React + TypeScript + Tailwind on the front, Spring Boot API, Postgres on Supabase and deployment on Vercel + Render.',
    },
  },
  {
    step: { pt: 'Agora', en: 'Now' },
    title: { pt: 'Buscando estágio ou vaga júnior', en: 'Looking for an internship or junior role' },
    body: {
      pt: 'Cursando Engenharia de Software (2º período) com foco em Java e Spring Boot: terminando os controllers e os testes do TaskManagerApi e transformando cada projeto em um case escrito.',
      en: 'Studying Software Engineering (2nd semester) with a focus on Java and Spring Boot: finishing the TaskManagerApi controllers and tests, and turning every project into a written case.',
    },
  },
]
