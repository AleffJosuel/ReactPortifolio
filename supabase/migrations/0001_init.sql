-- Portfolio schema: manually-added projects and contact form submissions.
-- Run this in the Supabase SQL editor (or via `supabase db push`) before
-- starting the backend.

create table if not exists projects (
  id           bigserial primary key,
  title        varchar(120) not null,
  description  text,
  tech_stack   jsonb not null default '[]'::jsonb,
  repo_url     varchar(500),
  live_url     varchar(500),
  image_url    varchar(500),
  created_at   timestamptz not null default now()
);

create index if not exists idx_projects_created_at on projects (created_at desc);

create table if not exists contact_messages (
  id           bigserial primary key,
  name         varchar(120) not null,
  email        varchar(255) not null,
  message      text not null,
  created_at   timestamptz not null default now()
);

create index if not exists idx_contact_messages_created_at on contact_messages (created_at desc);

-- Row Level Security -------------------------------------------------------
-- The Spring Boot backend connects directly via JDBC (not through
-- Supabase's PostgREST/client SDK), so RLS is not the primary security
-- boundary here -- plain Postgres GRANTs to a dedicated, non-superuser role
-- already scope what the backend can do. Enabling RLS with a policy scoped
-- to that role costs nothing and adds defense-in-depth: if the Supabase
-- anon/service key is ever exposed client-side, PostgREST still has no
-- policy allowing "anon"/"authenticated" to touch these tables.

alter table projects enable row level security;
alter table contact_messages enable row level security;

-- Dedicated login role for the backend. Change the password afterwards
-- (Supabase SQL editor: `alter role portfolio_app with password '...';`)
-- and put the same value in the backend's DB_USER/DB_PASSWORD env vars.
do $$
begin
  if not exists (select from pg_catalog.pg_roles where rolname = 'portfolio_app') then
    create role portfolio_app with login password 'change-me-in-supabase-dashboard';
  end if;
end
$$;

grant select, insert, update, delete on projects, contact_messages to portfolio_app;
grant usage, select on all sequences in schema public to portfolio_app;

-- Scope RLS policies to that role only (no policy is granted to
-- anon/authenticated, so PostgREST default-denies them once RLS is on).

create policy "portfolio_app full access on projects"
  on projects for all
  to portfolio_app
  using (true) with check (true);

create policy "portfolio_app full access on contact_messages"
  on contact_messages for all
  to portfolio_app
  using (true) with check (true);
