# Portfólio — React + TypeScript + Tailwind + Spring Boot + Supabase

Monorepo com:

- `frontend/` — React + TypeScript + Tailwind CSS (Vite)
- `backend/` — API REST em Java + Spring Boot
- `supabase/` — schema SQL (Postgres) usado pelo backend

## Como funciona

- **Home / Sobre / Contato**: seções de uma única página (`frontend/src/pages/HomePage.tsx`), navegação por âncora.
- **Projetos**: o backend expõe `GET /api/projects`, que junta os repositórios públicos do GitHub (usuário `AleffJosuel`, cacheados por 15 min) com projetos adicionados manualmente (salvos no Supabase). Passe o mouse (ou toque, no celular) em um card para ver as tecnologias e a descrição de como o projeto foi feito.
- **Adicionar projeto manualmente**: acesse `/admin` no site, informe o token de administrador (`ADMIN_TOKEN`) e use o formulário. Esse token é apenas uma conveniência de UI — a proteção real está no backend (header `X-Admin-Token`).
- **Contato**: o formulário salva a mensagem na tabela `contact_messages` do Supabase (sem envio de e-mail).

## Pré-requisitos

- Node.js 20+ e npm
- Java 21+ (o backend usa o Maven Wrapper, `mvnw`/`mvnw.cmd` — não precisa ter Maven instalado)
- Uma conta/projeto no [Supabase](https://supabase.com)

## 1. Configurar o Supabase

Siga `supabase/README.md`: rode `supabase/migrations/0001_init.sql` no SQL Editor do seu projeto Supabase e defina a senha do role `portfolio_app`.

## 2. Rodar o backend

```bash
cd backend
cp .env.example .env
# edite backend/.env com os dados do seu Supabase (DB_HOST, DB_USER, DB_PASSWORD)
# e escolha um ADMIN_TOKEN forte

./mvnw spring-boot:run       # Linux/Mac
# ou
mvnw.cmd spring-boot:run     # Windows
```

A API sobe em `http://localhost:8080`. Teste com:

```bash
curl http://localhost:8080/api/projects
```

## 3. Rodar o frontend

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Variáveis de ambiente

Veja `.env.example` (raiz) para a lista completa. Resumo:

| Variável | Onde | Descrição |
|---|---|---|
| `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASSWORD` | `backend/.env` | Conexão direta com o Postgres do Supabase |
| `GITHUB_USERNAME` | `backend/.env` | Usuário do GitHub a sincronizar (padrão `AleffJosuel`) |
| `GITHUB_CACHE_TTL_MINUTES` | `backend/.env` | TTL do cache de repositórios do GitHub (padrão 15 min) |
| `ADMIN_TOKEN` | `backend/.env` | Segredo exigido no header `X-Admin-Token` para criar/editar/excluir projetos manuais |
| `CORS_ALLOWED_ORIGINS` | `backend/.env` | Origem(ns) permitida(s) para o frontend |
| `VITE_API_BASE_URL` | `frontend/.env` | URL base da API para o frontend |

## Personalizar conteúdo

Nome, cargo, bio e links pessoais ficam em um único arquivo:
`frontend/src/lib/constants.ts` (`SITE`). Edite ali — os campos marcados com `TODO` ainda não foram preenchidos.

## Testes

```bash
cd backend && ./mvnw test   # roda com H2 em memória, não precisa do Supabase
```

## Build de produção

```bash
cd frontend && npm run build   # gera frontend/dist
cd backend && ./mvnw clean package   # gera backend/target/portfolio-0.0.1-SNAPSHOT.jar
```

Deploy (Vercel, Render, Railway etc.) não está incluído neste setup — é um passo futuro.
