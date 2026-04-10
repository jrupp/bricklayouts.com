# BrickLayouts Marketing Website

React SPA with static prerendering, deployed to AWS S3 + CloudFront.

**Stack:** TypeScript, React 18, React Router v7, Vite 6, Tailwind CSS v4, Shadcn UI (Radix), react-helmet-async, Playwright (prerendering only).

## Commands

Run from repo root. Node 20+ required.

```bash
npm ci                    # Install deps (always run first)
npm run dev               # Dev server on http://localhost:3000
npm run build             # Build SPA to build/
npm run prerender         # Prerender routes (requires build/ to exist, uses port 4173)
npm run build:static      # Build + prerender + generate sitemap (full production build)
npm run lint              # ESLint (AirBnB TypeScript + React)
npm run lint -- --fix     # Auto-fix lint errors
```

**Validate any change with:** `npm run build:static` (exit 0 = good).

## Critical Rules

- **Always `npm ci` before building.**
- **`npm run prerender` fails if `build/` doesn't exist.** Use `npm run build:static` to do both.
- **Prerender uses port 4173.** Kill any process on that port first.
- **No `tsc` installed.** Type-checking is Vite + SWC only. Do not run `npx tsc`.
- **`build/` is gitignored.** Never commit it.
- **Do not edit `src/index.css`** unless you need to add new CSS rules or custom properties. It is a large generated file — prefer adding styles via existing Tailwind utility classes in JSX.
- **`src/styles/globals.css` is the original Tailwind source** — it is not imported at runtime and editing it has no effect.
- **`src/components/ui/` is auto-generated Shadcn UI** — excluded from linting, do not modify by hand.

## Code Style

ESLint AirBnB config (`.eslintrc.cjs`):

- 2-space indentation, semicolons, single quotes, trailing commas
- No trailing whitespace on blank lines
- 100 character max line length
- Named components use function declarations, unnamed use arrow functions
- `import/prefer-default-export` is off — named exports are fine
- `@` path alias maps to `src/` (e.g., `@/components/...`)

## Adding a New Route

1. Create component in `src/components/`
2. Add `<Route>` in `src/App.tsx`
3. Add path to `getCurrentPage()` in `src/App.tsx`
4. Add route to `routes` array in `scripts/prerender.mjs`
5. Run `npm run build:static` to validate

## Styling

Tailwind CSS v4 utility classes are used throughout, but **Tailwind is not part of the build pipeline**. The CSS was generated once and checked in as `src/index.css`. There is no mechanism to rebuild it — if you add new utility classes that aren't already in `index.css`, they won't work. Stick to classes that already exist in the file.

Theme tokens (colors, radii) are defined as CSS custom properties in `src/index.css` (`:root` block near line 1970). To add new custom styles or properties, edit `src/index.css` directly. UI components use the `cn()` utility from `src/components/ui/utils.ts` for conditional class merging.

## SEO

Each page uses `src/components/Seo.tsx` with `<Helmet>` for title, meta, canonical, Open Graph, and JSON-LD structured data. Prerendering bakes these into static HTML.

## CI/CD

GitHub Actions (`.github/workflows/deploy.yml`) on push to `main`:
checkout → Node 20 → `npm ci` → install Playwright → build → prerender → generate sitemap → sync to S3 → invalidate CloudFront.

AWS infrastructure (S3 bucket, CloudFront distribution, CloudFront Functions for URL rewriting) is managed separately in `bricklayouts/cdk-infrastructure`.
