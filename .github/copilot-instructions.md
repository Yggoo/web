# Copilot Instructions

## Project

Yggoo is a Danish gift shop website. All user-facing content is written in Danish.

## Tech Stack

- **Framework**: Nuxt 4 (Vue 3, TypeScript)
- **UI**: Nuxt UI v3 with Tailwind CSS
- **Images**: `@nuxt/image`
- **Security**: `nuxt-security` — HTTP Basic Auth on `/admin` routes
- **Database**: NuxtHub + Cloudflare D1 (SQLite locally) via Drizzle ORM
- **Storage**: NuxtHub Blob (Cloudflare R2) for product image uploads

## Project Structure

```
app/
  app.vue              # Root component — wraps pages in <UApp>
  pages/
    index.vue          # Storefront
    admin/index.vue    # Admin CRUD (Basic Auth protected)
  assets/css/main.css  # Tailwind + Nuxt UI imports only
server/
  api/                 # Nitro API routes (products CRUD, image upload)
  db/
    schema.ts          # Drizzle ORM schema
    migrations/        # Auto-generated D1 migrations
  routes/uploads/      # Serves blob images
  tasks/seed.ts        # Nitro seed task
public/images/products/ # Legacy static product images
nuxt.config.ts
```

## Coding Conventions

### Components

- **Always use Nuxt UI components** — `UButton`, `UInput`, `UTable`, `UModal`, `UFormField`, `UContainer`, `UCard`, `UBadge`, `UAvatar`, `UDropdownMenu`, `UPopover`, `UFileUpload`, etc.
- Never use raw HTML elements (`<button>`, `<input>`, `<table>`, `<select>`) when a Nuxt UI equivalent exists.
- Never introduce external component libraries (e.g. Vuetify, PrimeVue, Element Plus).

### Styling

- Use Tailwind utility classes inline on elements.
- Do not add new CSS files. The only stylesheet is `app/assets/css/main.css`.

### TypeScript

- All new files use TypeScript (`.ts`, `.vue` with `<script setup lang="ts">`).
- Define types/interfaces for API payloads and component props.

### API Routes

- Server routes live in `server/api/`. Follow Nitro conventions (`defineEventHandler`, `readBody`, `getRouterParam`).
- Database access uses Drizzle ORM with the schema defined in `server/db/schema.ts`.

### Images

- Legacy images: static files under `public/images/products/`, referenced as `/images/products/<file>`.
- New uploads: stored in R2 blob, served via `/uploads/<pathname>`.
- Prefer `<NuxtImg>` (from `@nuxt/image`) instead of `<img>` for regular images (e.g. static paths or `/uploads`), but plain `<img>` is acceptable for blob/object URL previews or in cases where `<NuxtImg>` cannot be used.

### Content Language

- All UI labels, headings, error messages, and placeholder text must be in Danish.

## Key Files

| File                        | Purpose                                                              |
| --------------------------- | -------------------------------------------------------------------- |
| `nuxt.config.ts`            | All module config, security rules, Vite settings                     |
| `server/db/schema.ts`       | Drizzle table definitions — update here before generating migrations |
| `app/pages/index.vue`       | Public storefront                                                    |
| `app/pages/admin/index.vue` | Admin product management                                             |

## Commands

```bash
npm run dev       # Dev server on port 3000
npm run build     # Production build
npm run generate  # Static generation
npm run preview   # Preview production build
```
