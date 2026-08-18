create type public.booking_status as enum ('pending', 'confirmed', 'cancelled');

create table public.bookings (
  id uuid primary key default gen_random_uuid(),
  location_id text not null,
  guest_name text not null,
  email text not null,
  phone text not null,
  postcode text,
  check_in date not null,
  check_out date not null,
  guests integer not null,
  status public.booking_status not null default 'pending',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

grant select, insert, update, delete on public.bookings to authenticated;
grant insert on public.bookings to anon;
grant all on public.bookings to service_role;

alter table public.bookings enable row level security;

create policy "Anyone can submit a booking"
  on public.bookings
  for insert
  to anon, authenticated
  with check (true);

create policy "Authenticated users can view all bookings"
  on public.bookings
  for select
  to authenticated
  using (true);

create policy "Authenticated users can update bookings"
  on public.bookings
  for update
  to authenticated
  using (true)
  with check (true);

create policy "Authenticated users can delete bookings"
  on public.bookings
  for delete
  to authenticated
  using (true);
