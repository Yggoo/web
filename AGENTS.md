# AGENTS.md

## Project

Yggoo is a Danish gift shop website. Content is in Danish.

## Tech Stack

- **Framework**: Nuxt 4 (Vue 3, TypeScript)
- **UI**: Nuxt UI v3 (`<UButton>`, `<UApp>`, `<UTable>`, etc.) with Tailwind CSS
- **Images**: `@nuxt/image`
- **Security**: `nuxt-security` — basic auth protects `/admin` routes
- **Database**: NuxtHub with Cloudflare D1 (SQLite locally, D1 in production) via Drizzle ORM
- **Storage**: NuxtHub Blob (Cloudflare R2) for product image uploads

## Project Structure

```
app/
  app.vue              # Root component, wraps pages in <UApp>
  pages/
    index.vue          # Storefront — product cards with images and prices
    admin/index.vue    # Admin CRUD — protected by HTTP Basic Auth
  assets/
    css/main.css       # Tailwind + Nuxt UI imports
server/
  api/                 # API routes (products CRUD, image upload)
  db/
    schema.ts          # Drizzle ORM schema (products table)
    migrations/        # Auto-generated D1 migrations
  routes/uploads/      # Serves uploaded blob images
  tasks/seed.ts        # Nitro task to seed product data
public/
  images/products/     # Static product images
nuxt.config.ts         # Modules, security config, vite/devServer settings
.ona/automations.yaml  # Dev environment tasks and services
```

## Conventions

- Pages go in `app/pages/` (Nuxt 4 app directory structure).
- **Nuxt UI components are mandatory for all layout and design.** Use `UTable`, `UModal`, `UButton`, `UInput`, `UFormField`, `UFileUpload`, `UDropdownMenu`, `UAvatar`, `UPopover`, `UContainer`, etc. Do not use raw HTML elements (e.g. `<table>`, `<button>`, `<input>`) or custom component libraries when a Nuxt UI equivalent exists. Any deviation from this rule must be explicitly requested by the user.
- Styling uses Tailwind utility classes inline. The only CSS file is `app/assets/css/main.css` which imports Tailwind and Nuxt UI.
- Legacy product images are static files in `public/images/products/`. New uploads go to R2 blob storage and are served via `/uploads/`.
- No layouts directory exists; `app.vue` serves as the single layout.

## Configuration

- All module and security config lives in `nuxt.config.ts`.
- Basic auth credentials for `/admin` are in `nuxt.config.ts` under `security.basicAuth`.
- Vite is configured with `allowedHosts: 'all'` and `hmr.clientPort: 443` for the Ona dev environment proxy.
- Dev server binds to `0.0.0.0`.

## Commands

```bash
npm run dev       # Start dev server (port 3000)
npm run build     # Production build
npm run generate  # Static site generation
npm run preview   # Preview production build
```

## Environment

- Dependencies install via `npm install` (triggered on environment creation).
- Dev server runs as an Ona service (`dev-server` in `.ona/automations.yaml`).
