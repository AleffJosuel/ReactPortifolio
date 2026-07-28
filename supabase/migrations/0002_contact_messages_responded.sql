-- Tracks whether the portfolio owner has already replied to a contact
-- message (reply itself happens outside the app, via a mailto: link in
-- the admin panel -- no outbound email sending is configured).
alter table contact_messages
  add column if not exists responded boolean not null default false;
