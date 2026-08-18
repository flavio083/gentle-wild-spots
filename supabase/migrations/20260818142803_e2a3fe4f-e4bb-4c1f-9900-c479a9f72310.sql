create type public.attraction_category as enum ('beach', 'nature', 'trail', 'history', 'culture', 'natural_formation', 'heritage');

create type public.trail_level as enum ('none', 'easy', 'moderate', 'difficult');

create type public.guide_requirement as enum ('not_required', 'recommended', 'required');

create table public.attractions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  description text not null,
  category public.attraction_category not null,
  municipality text not null,
  region text not null,
  latitude numeric not null,
  longitude numeric not null,
  trail_level public.trail_level not null default 'none',
  guide_required public.guide_requirement not null default 'not_required',
  images text[] not null default '{}',
  featured boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

grant select on public.attractions to anon, authenticated;
grant insert, update, delete on public.attractions to authenticated;
grant all on public.attractions to service_role;

alter table public.attractions enable row level security;

create policy "Anyone can view attractions"
  on public.attractions
  for select
  to anon, authenticated
  using (true);

create policy "Authenticated users can manage attractions"
  on public.attractions
  for all
  to authenticated
  using (true)
  with check (true);
