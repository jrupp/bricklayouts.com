<p align="center">
  <a href="https://www.bricklayouts.com">
    <img src="public/banner_fullcolor.svg" alt="BrickLayouts" width="500" />
  </a>
</p>

<p align="center">
  <em>BrickLayouts is the easiest way for LEGO® builders to design stunning displays together, from anywhere, on any device.</em>
</p>

<p align="center">
  <a href="https://www.bricklayouts.com">www.bricklayouts.com</a>
</p>

---

# BrickLayouts Website

This is the marketing website for [BrickLayouts](https://www.bricklayouts.com). It is a React single-page application with static prerendering for SEO, deployed to AWS S3 + CloudFront.

## Getting Started

```bash
npm ci               # Install dependencies
npm run dev          # Start development server (http://localhost:3000)
```

## Linting

This project uses [ESLint](https://eslint.org/) with the
[AirBnB JavaScript/TypeScript style guide](https://github.com/airbnb/javascript).

```bash
npm run lint             # Check for lint errors
npm run lint -- --fix    # Auto-fix what can be fixed
```

The auto-generated Shadcn UI components (`src/components/ui/`) are excluded
from linting.

## Building for Production

```bash
npm run build            # Build the SPA to ./build
npm run prerender        # Prerender all routes to static HTML (requires build/)
npm run build:static     # Build + prerender + sitemap in one command
```

> **Note:** `npm run prerender` requires the `build/` directory to exist. Run
> `npm run build` first, or use `npm run build:static` which does everything.

### Prerendering

The prerender script uses [Playwright](https://playwright.dev/) to visit each
route with headless Chromium and snapshot the fully-rendered HTML (including
`<head>` tags from `react-helmet-async`). This gives search engines, AI
crawlers, and social sharing previews complete HTML with proper meta tags,
canonical URLs, and JSON-LD structured data.

## Deployment (AWS S3 + CloudFront)

The site is deployed as static files to S3 and served via CloudFront. The
GitHub Actions workflow (`.github/workflows/deploy.yml`) runs on push to
`main`:

1. Installs dependencies and Playwright
2. Builds the app and prerenders all routes
3. Generates `sitemap.xml`
4. Syncs `build/` to S3 with appropriate cache headers
5. Invalidates CloudFront cache

### Required Secrets

| Secret                       | Description                                   |
| ---------------------------- | --------------------------------------------- |
| `AWS_ROLE_TO_ASSUME`         | ARN of the IAM role for OIDC auth             |
| `S3_BUCKET`                  | S3 bucket name (e.g., `bricklayouts-website`) |
| `CLOUDFRONT_DISTRIBUTION_ID` | (Optional) CloudFront distribution ID         |

### Optional Variables

| Variable     | Default     | Description               |
| ------------ | ----------- | ------------------------- |
| `AWS_REGION` | `us-east-1` | AWS region for deployment |

## Project Structure

```text
src/
├── components/
│   ├── Home.tsx, Pricing.tsx, About.tsx, Contact.tsx, ...  # Page components
│   ├── Navigation.tsx, Footer.tsx                          # Layout
│   ├── Seo.tsx                                             # SEO + JSON-LD
│   └── ui/                                                 # Shadcn UI components
├── App.tsx                  # Routes (React Router)
├── main.tsx                 # Entry point
└── index.css                # Tailwind CSS (generated once, not rebuilt)
scripts/
├── prerender.mjs            # Playwright prerender script
└── generate-sitemap.mjs     # Sitemap generator
```
