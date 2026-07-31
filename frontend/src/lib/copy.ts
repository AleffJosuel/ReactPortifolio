export const COPY = {
  pt: {
    nav: ['Stack', 'Projetos', 'Trajetória', 'Sobre', 'Contato'],
    downloadCv: 'Baixar CV',
    themeLight: 'Tema claro',
    themeDark: 'Tema escuro',

    hero: {
      badge: 'Disponível para estágio e vaga júnior',
      accentLine: 'Foco em Java / Spring Boot · Full stack em formação',
      educationLine: 'Engenharia de Software — 2º período, em formação',
      lead: 'Construo aplicações web modernas com React, TypeScript e Java. Aprendo construindo código de verdade — cada projeto aqui vem com o que resolve e o que ainda falta.',
      seeProjects: 'Ver projetos',
      copyEmail: 'Copiar e-mail',
      emailCopied: 'E-mail copiado',
      githubLabel: 'GitHub · @AleffJosuel',
      stats: ['repositórios públicos', 'linguagens em uso', 'projetos em construção'],
      langBarLabel: 'Linguagens nos repositórios',
    },

    stack: {
      sectionLabel: '01 — Stack',
      hint: 'Clique em uma tecnologia para filtrar os projetos.',
      project: 'projeto',
      projects: 'projetos',
    },

    projects: {
      sectionLabel: '02 — Projetos',
      hint: 'Abra um case para ler como foi construído e o que vem depois.',
      filters: ['Tudo', 'Java', 'React', 'TypeScript', 'Spring Boot'],
      open: 'Abrir case',
      close: 'Fechar',
      how: 'Como foi feito',
      next: 'Próximo passo',
      repo: 'Ver repositório',
      caseLabel: 'Case',
    },

    timeline: {
      sectionLabel: '03 — Trajetória',
    },

    about: {
      sectionLabel: '04 — Sobre',
      paragraph1:
        'Sou desenvolvedor full stack em formação. Trabalho com React, TypeScript, Java com Spring Boot e bancos relacionais, e gosto de resolver problemas reais escrevendo código limpo, testável e bem estruturado.',
      paragraph2:
        'Cada projeto aqui tem um case curto: o que resolve, como foi construído e o próximo passo. Quando algo está incompleto, está escrito lá — prefiro isso a parecer pronto.',
      educationLabel: 'Formação',
      educationValue: 'Engenharia de Software',
      educationDetail: '2º período · em formação',
      focusLabel: 'Foco atual',
      focusValue: 'Java · Spring Boot',
      focusDetail: 'APIs REST, JPA e modelagem relacional',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      resume: 'Currículo (PDF)',
      portraitPlaceholder: 'Foto em breve',
    },

    contact: {
      sectionLabel: '05 — Contato',
      heading: 'Aberto a estágio, vaga júnior e freelance.',
      lead: 'Envie uma mensagem e eu respondo o quanto antes.',
      copyEmail: 'Copiar e-mail',
      emailCopied: 'E-mail copiado',
      formTitle: 'Ou envie por aqui',
      name: 'Nome',
      email: 'E-mail',
      message: 'Mensagem',
      send: 'Enviar mensagem',
      sending: 'Enviando...',
      sent: 'Mensagem enviada! Vou te responder em breve.',
    },

    footer: {
      rights: '© 2026 Aleff Josuel',
    },
  },

  en: {
    nav: ['Stack', 'Projects', 'Path', 'About', 'Contact'],
    downloadCv: 'Download CV',
    themeLight: 'Light theme',
    themeDark: 'Dark theme',

    hero: {
      badge: 'Available for internship and junior roles',
      accentLine: 'Java / Spring Boot focus · Full stack in training',
      educationLine: 'Software Engineering student — 2nd semester, in progress',
      lead: 'I build modern web applications with React, TypeScript and Java. I learn by shipping real code — every project here comes with what it solves and what is still missing.',
      seeProjects: 'See projects',
      copyEmail: 'Copy e-mail',
      emailCopied: 'E-mail copied',
      githubLabel: 'GitHub · @AleffJosuel',
      stats: ['public repositories', 'languages in use', 'projects in progress'],
      langBarLabel: 'Languages across the repositories',
    },

    stack: {
      sectionLabel: '01 — Stack',
      hint: 'Click a technology to filter the projects.',
      project: 'project',
      projects: 'projects',
    },

    projects: {
      sectionLabel: '02 — Projects',
      hint: 'Open a case to read how it was built and what comes next.',
      filters: ['All', 'Java', 'React', 'TypeScript', 'Spring Boot'],
      open: 'Open case',
      close: 'Close',
      how: 'How it was built',
      next: 'Next step',
      repo: 'View repository',
      caseLabel: 'Case',
    },

    timeline: {
      sectionLabel: '03 — Path',
    },

    about: {
      sectionLabel: '04 — About',
      paragraph1:
        'I am a full stack developer in training. I work with React, TypeScript, Java with Spring Boot and relational databases, and I like solving real problems with clean, testable, well-structured code.',
      paragraph2:
        'Every project here has a short case: what it solves, how it was built and the next step. When something is unfinished, it says so — I prefer that to looking finished.',
      educationLabel: 'Education',
      educationValue: 'Software Engineering',
      educationDetail: '2nd semester · in progress',
      focusLabel: 'Current focus',
      focusValue: 'Java · Spring Boot',
      focusDetail: 'REST APIs, JPA and relational modelling',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      resume: 'CV (PDF)',
      portraitPlaceholder: 'Photo coming soon',
    },

    contact: {
      sectionLabel: '05 — Contact',
      heading: 'Open to internship, junior roles and freelance work.',
      lead: 'Send a message and I will reply as soon as possible.',
      copyEmail: 'Copy e-mail',
      emailCopied: 'E-mail copied',
      formTitle: 'Or send it from here',
      name: 'Name',
      email: 'E-mail',
      message: 'Message',
      send: 'Send message',
      sending: 'Sending...',
      sent: 'Message sent! I will get back to you soon.',
    },

    footer: {
      rights: '© 2026 Aleff Josuel',
    },
  },
} as const

export type CopyDict = typeof COPY.pt
