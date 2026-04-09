# BrickLayouts Website

This is the marketing website for BrickLayouts. The original design is
available at <https://www.figma.com/design/N4yw0rGmqjMILsMP3ubNAX>.

## Getting Started

```bash
npm install          # Install dependencies
npm run dev          # Start development server
```

## Linting

This project uses [ESLint](https://eslint.org/) with the
[AirBnB JavaScript/TypeScript style guide](https://github.com/airbnb/javascript).

```bash
npm run lint         # Check for lint errors
npm run lint -- --fix # Auto-fix what can be fixed
```

The auto-generated Shadcn UI components (`src/components/ui/`) are excluded
from linting.

## Building for Production

```bash
npm run build        # Build the SPA to ./build
npm run prerender    # Prerender all routes to static HTML
npm run build:static # Build + prerender in one command
```

### What Prerendering Does

The `prerender` script uses Playwright to visit each route and snapshot the
fully-rendered HTML (including `<head>` tags from `react-helmet-async`).
This ensures:

- **SEO**: Search engines see complete HTML with proper `<title>`, `<meta>`,
  canonical URLs, and JSON-LD structured data
- **AI/Agent crawlers**: Non-JS crawlers can read the full page content
- **Social sharing**: Open Graph and Twitter card meta tags are present

Routes prerendered:

- `/` → `build/index.html`
- `/pricing` → `build/pricing/index.html`
- `/about` → `build/about/index.html`
- `/contact` → `build/contact/index.html`
- `/privacy` → `build/privacy/index.html`
- `/terms` → `build/terms/index.html`
- `/signup` → `build/signup/index.html`

## Deployment (AWS S3 + CloudFront)

The site is deployed as static files to S3 and served via CloudFront.

### GitHub Actions Workflow

The workflow at `.github/workflows/deploy.yml` runs on push to `main`:

1. Installs dependencies and Playwright
2. Builds the app (`npm run build`)
3. Prerenders all routes (`npm run prerender`)
4. Syncs `build/` to S3 with appropriate cache headers
5. Invalidates CloudFront cache

### Required Secrets

Configure these in your GitHub repository settings:

| Secret                       | Description                                    |
| ---------------------------- | ---------------------------------------------- |
| `AWS_ROLE_TO_ASSUME`         | ARN of the IAM role for OIDC auth              |
| `S3_BUCKET`                  | S3 bucket name (e.g., `bricklayouts-website`)  |
| `CLOUDFRONT_DISTRIBUTION_ID` | (Optional) CloudFront distribution ID          |

### Optional Variables

| Variable     | Default     | Description                 |
| ------------ | ----------- | --------------------------- |
| `AWS_REGION` | `us-east-1` | AWS region for deployment   |

### CloudFront URL Rewriting

Since this is an SPA with prerendered routes, CloudFront needs a
viewer-request function to rewrite URLs:

- `/pricing` → `/pricing/index.html`
- `/about` → `/about/index.html`
- Unknown routes → `/index.html` (SPA fallback)

See `cloudfront/url-rewrite.js` for the function code (create this as a
CloudFront Function and associate it with your distribution's default
behavior).

## Project Structure

```text
.eslintrc.cjs            # ESLint config (AirBnB + TypeScript + React)
tsconfig.json            # TypeScript config (for ESLint + editor)
public/
└── screenshots/         # Static images (stable URLs, not hashed)
src/
├── components/
│   ├── Seo.tsx          # SEO + JSON-LD structured data
│   ├── Home.tsx
│   ├── Pricing.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── PrivacyPolicy.tsx
│   ├── TermsConditions.tsx
│   ├── SignUp.tsx
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── ui/              # Shadcn UI components
├── App.tsx              # Routes
├── main.tsx             # Entry point with HelmetProvider
└── index.css            # Tailwind CSS
scripts/
└── prerender.mjs        # Playwright prerender script
.github/
└── workflows/
    └── deploy.yml       # CI/CD workflow
```

## Structured Data (JSON-LD)

Each page includes Schema.org JSON-LD for search engines and AI crawlers:

- **All pages**: `Organization`, `WebSite`, `WebPage`, `BreadcrumbList`
- **Home page only**: `WebApplication` (with screenshots and offers)
- **Pricing page**: `OfferCatalog` with detailed `Offer` items
- **Contact page**: `ContactPoint`

This follows [Google's structured data guidelines][sd-policies] — structured
data only appears on pages where the corresponding content is visible.

[sd-policies]: https://developers.google.com/search/docs/appearance/structured-data/sd-policies
