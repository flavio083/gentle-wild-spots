# Plano: Guia de Descoberta da Paraíba

## Objetivo
Transformar o projeto atual (Wild Haven) em um aplicativo de descoberta de pontos turísticos da Paraíba, com mapa, filtros e páginas de detalhes.

## Escopo
- Backend com tabela de atrações no banco de dados.
- Painel admin para cadastrar/editar locais.
- Dados de exemplo com pontos turísticos reais da Paraíba.
- Mapa interativo usando Leaflet + OpenStreetMap (sem custo de API).
- Link "Como chegar" abrindo Google Maps com direções.

## 1. Banco de dados
Criar tabela `public.attractions` com:
- `id`, `name`, `slug`, `description`
- `category` (praia, natureza, trilha, história, cultura, formação natural, patrimônio)
- `municipality`, `region`
- `latitude`, `longitude`
- `trail_level` (nenhuma, fácil, moderada, difícil)
- `guide_required` (não necessário, recomendado, obrigatório)
- `images` (array de URLs), `featured`, timestamps

Regras de acesso:
- Qualquer pessoa pode visualizar.
- Usuários autenticados podem criar, editar e excluir.

## 2. Dados iniciais
Inserir 6–8 atrações de exemplo da Paraíba (Pedra do Altar, Praia de Tambaba, Centro Cultural, etc.) com coordenadas reais.

## 3. Refatoração de rotas
- `/` → Home com busca, categorias e mapa da Paraíba.
- `/descobrir` → Resultados com filtros e lista + mapa.
- `/ponto/:slug` → Página do ponto turístico.
- `/admin` → Painel para gerenciar atrações.
- Remover rotas antigas de camping (`/locations`, `/location/:id`, `/about`, `/contact`, `/auth` opcional).

## 4. Componentes
- `AttractionCard`: card de resultado com foto, nome, categoria, distância.
- `CategoryGrid`: ícones das categorias na Home.
- `AttractionMap`: mapa Leaflet com marcadores.
- `FilterPanel`: filtros de distância, categoria, trilha e guia.
- `AttractionForm`: formulário do admin para criar/editar.

## 5. Páginas
- **Home**: hero "Descubra a Paraíba", busca, categorias, mapa com todos os pontos.
- **Descobrir**: filtros laterais/superiores, lista de cards, mapa ao lado.
- **Ponto**: fotos, descrição, informações (município, região, categoria, trilha, guia), mapa pequeno, botão "Como chegar".
- **Admin**: tabela de atrações com ações de editar/excluir e botão para adicionar nova.

## 6. Estilo
Ajustar tokens para uma paleta mais tropical/clara (tons de azul, verde, areia), mantendo a tipografia minimalista.

## 7. Validação
- Verificar build sem erros.
- Testar fluxo: Home → categoria → Descobrir → Ponto → Google Maps.
- Verificar admin criando/editando atração.
