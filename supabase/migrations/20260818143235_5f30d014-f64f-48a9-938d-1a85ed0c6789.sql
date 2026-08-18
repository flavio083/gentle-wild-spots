update public.attractions
set images = case slug
  when 'pedra-do-altar' then array['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80']
  when 'praia-de-tambaba' then array['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80']
  when 'centro-historico-joao-pessoa' then array['https://images.unsplash.com/photo-1518182170546-0766bc6f9213?w=800&q=80']
  when 'estacao-ciencia-cultura-artes' then array['https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&q=80']
  when 'pico-do-jabre' then array['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80']
  when 'fenda-da-baba' then array['https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80']
  when 'serra-do-bodopita' then array['https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80']
  when 'cachoeira-do-inferno' then array['https://images.unsplash.com/photo-1432405972618-c60b0226b9ce?w=800&q=80']
  else images
end;