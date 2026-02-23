# AGENTS.md

## Project

Yggoo is a Danish gift shop website. Content is in Danish.

## Tech Stack

- **Framework**: Nuxt 4 (Vue 3, TypeScript)
- **UI**: Nuxt UI v3 (`<UButton>`, `<UApp>`, etc.) with Tailwind CSS
- **Content**: `@nuxt/content` with markdown sources (`content.config.ts`)
- **Images**: `@nuxt/image`
- **Security**: `nuxt-security` — basic auth protects `/admin` routes
- **Database**: `better-sqlite3` (used by `@nuxt/content` internally)

## Project Structure

```
app/
  app.vue              # Root component, wraps pages in <UApp>
  pages/
    index.vue          # Storefront — product cards with images and prices
    admin/index.vue    # Admin dashboard — protected by HTTP Basic Auth
  assets/
    css/main.css       # Tailwind + Nuxt UI imports
public/
  images/products/     # Product images (01.png–07.png, game1.png, ring1–5.png)
nuxt.config.ts         # Modules, security config, vite/devServer settings
content.config.ts      # @nuxt/content collection definitions
.ona/automations.yaml  # Dev environment tasks and services
```

## Conventions

- Pages go in `app/pages/` (Nuxt 4 app directory structure).
- Use Nuxt UI components (`UButton`, `UApp`, etc.) — do not use raw HTML buttons or custom component libraries.
- Styling uses Tailwind utility classes inline. The only CSS file is `app/assets/css/main.css` which imports Tailwind and Nuxt UI.
- Product images are static files in `public/images/products/`.
- No layouts directory exists; `app.vue` serves as the single layout.
- No composables, plugins, or server routes exist yet.

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
