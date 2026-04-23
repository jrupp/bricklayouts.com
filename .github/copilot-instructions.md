# Copilot Coding Agent Instructions

> Trust these instructions. Only search or explore the repo if information here is incomplete or wrong.

## Repository Summary

This is the **BrickLayouts marketing website** — a React single-page application (SPA) with static prerendering for SEO. It is deployed as static files to AWS S3 + CloudFront. The site is small (~78 source files, ~7 500 lines of TSX/CSS).

**Stack:** TypeScript, React 18, React Router v7, Vite 6, Tailwind CSS v4, Shadcn UI (Radix primitives), react-helmet-async (SEO), Playwright (prerendering).

## Build & Validation Commands

Always run commands from the repository root. Node 20+ is required (CI uses Node 20).

| Step | Command | Time | Notes |
|---|---|---|---|
| Install deps | `npm ci` | ~15 s | Always run first. Uses `package-lock.json`. |
| Build (SPA) | `npm run build` | ~2 s | Outputs to `build/`. |
| Install Playwright | `npx playwright install chromium` | ~10 s | Required before prerender. CI does this explicitly. |
| Prerender | `npm run prerender` | ~10 s | **Must run `npm run build` first** or it exits with code 1. Uses port 4173. |
| Build + Prerender | `npm run build:static` | ~12 s | Combines build and prerender in one command, plus generates the sitemap. This is what is used to build the static site for deployment. |
| Lint | `npm run lint` | ~5 s | ESLint with AirBnB TypeScript + React rules. |
| Dev server | `npm run dev` | — | Starts on `http://localhost:3000`, opens browser. |
| Generate sitemap | `node scripts/generate-sitemap.mjs` | ~1 s | Generates `build/sitemap.xml` based on routes. Run after adding a new route. |

### Critical Notes

- **Always run `npm ci` before building.** Uses `package-lock.json`.
- **`npm run prerender` requires `build/` to exist.** If `build/` is missing it will print "Build directory not found" and exit 1. Always run `npm run build` before `npm run prerender`, or use `npm run build:static`.
- **Prerender uses port 4173.** If that port is already in use, prerender will fail. Kill any process on that port first.
- **No TypeScript compiler (`tsc`) is installed.** Type-checking is handled by Vite + SWC at build time. Do not run `npx tsc`. A `tsconfig.json` exists for ESLint type-aware linting and editor support.
- **ESLint is configured** with the AirBnB JavaScript/TypeScript style guide (`.eslintrc.cjs`). Run `npm run lint` to check for violations. All new code **must** follow this style: 2-space indentation, semicolons, single quotes, trailing commas, no trailing whitespace on blank lines. 100 character max line length. The `src/components/ui/` directory (auto-generated Shadcn UI) is excluded from linting.
- **The `build/` directory is gitignored.** Never commit it.

### CI Pipeline

The GitHub Actions workflow at `.github/workflows/deploy.yml` runs on push to `main`:

1. Checkout → Setup Node 20 → `npm ci`
2. `npx playwright install chromium`
3. `npm run build`
4. `npm run prerender`
5. Sync `build/` to S3 with cache headers → Invalidate CloudFront

To replicate CI locally, run these commands in order:

```bash
npm ci
npx playwright install chromium
npm run build
npm run prerender
```

A successful `npm run build:static` (exit code 0) is sufficient to validate any change. If you need to verify a change rendered properly, check the output in `build/`.

## Project Layout

```
├── .eslintrc.cjs               # ESLint config (AirBnB + TypeScript + React)
├── tsconfig.json               # TypeScript config (for ESLint + editor support)
├── index.html                  # Vite entry HTML (template for the SPA)
├── package.json                # Dependencies & scripts
├── vite.config.ts              # Vite config: SWC plugin, path aliases, build → build/
├── src/
│   ├── main.tsx                # React entry point (HelmetProvider + App)
│   ├── App.tsx                 # Routes (React Router BrowserRouter)
│   ├── index.css               # Pre-compiled Tailwind CSS v4 output (DO NOT manually edit)
│   ├── styles/
│   │   └── globals.css         # Tailwind v4 theme: CSS custom properties, @theme, @layer base
│   ├── components/
│   │   ├── Home.tsx            # Landing page
│   │   ├── Pricing.tsx         # Pricing page
│   │   ├── About.tsx           # About page
│   │   ├── Contact.tsx         # Contact page
│   │   ├── PrivacyPolicy.tsx   # Privacy policy
│   │   ├── TermsConditions.tsx # Terms & conditions
│   │   ├── SignUp.tsx          # Sign-up page
│   │   ├── Navigation.tsx      # Sticky top nav bar
│   │   ├── Footer.tsx          # Site footer
│   │   ├── Seo.tsx             # SEO: meta tags, Open Graph, JSON-LD structured data
│   │   └── ui/                 # Shadcn UI primitives (Radix-based)
│   │       └── utils.ts        # cn() helper using clsx + tailwind-merge
├── scripts/
│   └── prerender.mjs           # Playwright script: serves build/, visits each route, snapshots HTML
├── public/
│   ├── llms.txt                    # LLM-readable site summary, served at /llms.txt
│   └── screenshots/            # Static images (stable URLs, not hashed by Vite)
├── build/                      # Build output (gitignored)
└── .github/
    └── workflows/
        └── deploy.yml          # CI/CD: build → prerender → deploy to S3/CloudFront
```

### Architecture Details

- **Routing:** `src/App.tsx` defines all routes using `react-router-dom` `<BrowserRouter>`. Routes: `/`, `/pricing`, `/about`, `/contact`, `/privacy`, `/terms`, `/signup`.
- **SEO:** Each page component uses `src/components/Seo.tsx` which renders `<Helmet>` tags (title, meta, canonical, Open Graph, JSON-LD). Prerendering bakes these into static HTML.
- **llms.txt:** `public/llms.txt` is served at `/llms.txt` and provides a curated LLM-readable summary of the site. **Keep it up to date whenever page content changes** — if features, pricing, policies, or contact information are added or changed, review and update `public/llms.txt` to reflect those changes.
- **Styling:** Tailwind CSS v4 with CSS-first configuration. Theme tokens (colors, radii) are defined as CSS custom properties in `src/styles/globals.css` using `@theme inline`. The compiled output is `src/index.css` — **do not edit `index.css` directly**; edit `globals.css` or use Tailwind utility classes in components.
- **UI components:** `src/components/ui/` contains Shadcn UI components. They use the `cn()` utility from `src/components/ui/utils.ts` for conditional class merging.
- **Path alias:** `@` maps to `src/` (configured in `vite.config.ts`). Import with `@/components/...`, `@/styles/...`.
- **Prerendering:** `scripts/prerender.mjs` launches a local HTTP server on port 4173 serving `build/`, visits each route with headless Chromium, waits for react-helmet-async to hydrate, and writes the snapshot to `build/<route>/index.html`.

### Adding a New Route

When adding a new page:

1. Create the component in `src/components/`.
2. Add the `<Route>` in `src/App.tsx`.
3. Add the path to `getCurrentPage()` in `src/App.tsx`.
4. Add the route to the `routes` array in `scripts/prerender.mjs`.
6. Run `npm run build:static` to validate.

### Key Dependencies

- `react-helmet-async` — per-page `<head>` management (SEO meta, JSON-LD).
- `react-router-dom` v7 — client-side routing with `BrowserRouter`.
- `lucide-react` — icon library used throughout components.
- `@radix-ui/*` — headless UI primitives (used by Shadcn UI components in `ui/`).
- `playwright` (devDependency) — headless browser for prerendering; **not used for tests**.
