# Supabase setup

1. Create a project at supabase.com and open **SQL Editor**.
2. Paste and run `migrations/0001_init.sql`. It creates the `projects` and
   `contact_messages` tables, enables Row Level Security, and creates a
   dedicated `portfolio_app` role with a placeholder password.
3. Set a real password for that role:
   ```sql
   alter role portfolio_app with password 'your-strong-password';
   ```
4. In Supabase project settings → Database, copy the host (e.g.
   `db.xxxxx.supabase.co`) and use the **direct connection** (port 5432),
   not the PgBouncer pooler — simpler for a low-traffic personal site.
5. Fill the backend's `.env` with:
   ```
   DB_HOST=db.xxxxx.supabase.co
   DB_PORT=5432
   DB_NAME=postgres
   DB_USER=portfolio_app
   DB_PASSWORD=your-strong-password
   ```
