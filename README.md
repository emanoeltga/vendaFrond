# VendaFrond - Marketplace Angular 20

Aplicação Angular 20 standalone para e-commerce/marketplace com três áreas: storefront, cliente e admin.

## Stack
- Angular 20 com Standalone API
- Lazy loading com `loadComponent`
- Guards (`authGuard` e `roleGuard`)
- Interceptor JWT
- Reactive Forms
- Arquitetura por features + serviços por domínio
- SCSS + design responsivo

## Estrutura
```bash
src/app
├── core
│   ├── enums
│   ├── guards
│   ├── interceptors
│   ├── models
│   └── services
├── features
│   ├── storefront
│   ├── auth
│   ├── account
│   └── admin
├── layouts
└── shared
```

## Configuração
1. Instale dependências:
   ```bash
   npm install
   ```
2. Execute em desenvolvimento:
   ```bash
   npm start
   ```
3. Build de produção:
   ```bash
   npm run build
   ```

## Integração API REST + JWT
- Base endpoint configurada por `environment.apiBaseUrl` (arquivo `src/environments/environment.ts`).
- Em desenvolvimento, `npm start` usa `proxy.conf.json` para redirecionar `/api/**` para `http://localhost:8080`.
- Em produção, ajuste `src/environments/environment.prod.ts` para a URL final do backend (ou mantenha vazio para mesmo domínio).
- Login em `POST /api/auth/login`.
- Token salvo em `localStorage` e enviado via interceptor em `Authorization: Bearer <token>`.
- Serviços implementados para domínios:
  - Auth, Users, Catalog, Cart, Checkout, Orders, Addresses
  - Products, Product Variants, Product Images, Categories, Brands
  - Admin Orders, Admin Payments, Admin Order History

## Funcionalidades entregues
- Storefront: catálogo com filtro, detalhe de produto, carrinho e login
- Cliente: perfil, endereços, pedidos e checkout
- Admin: produtos, categorias, marcas, pedidos, pagamentos e usuários
- CRUD base nos serviços administrativos e listagens pagináveis
- Controle de acesso por autenticação e role

## Evoluções recomendadas
- Resolver ambiente por `environment.ts`/`environment.prod.ts`.
- Adicionar estado global (Signals Store/Ngrx) para carrinho e sessão.
- Adicionar upload de imagens, editor rico e tabelas avançadas no admin.
- Adicionar testes unitários e e2e.
