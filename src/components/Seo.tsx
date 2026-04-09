import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.bricklayouts.com';
const SITE_NAME = 'BrickLayouts';
const DEFAULT_DESCRIPTION = 'BrickLayouts is the easiest way for LEGO® builders to design stunning displays together, from anywhere, on any device.';
const DEFAULT_IMAGE = `${SITE_URL}/social-media.png`;

// Stable @id anchors for the base graph
const ORG_ID = `${SITE_URL}/#org`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const APP_ID = `${SITE_URL}/#app`;

// Base Organization schema (shared across all pages - this is appropriate per Google guidelines)
const organizationSchema = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: SITE_NAME,
  legalName: 'BrickLayouts, LLC',
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  email: 'hello@bricklayouts.com',
  description: DEFAULT_DESCRIPTION,
};

// Base WebSite schema (shared across all pages - this is appropriate per Google guidelines)
const websiteSchema = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { '@id': ORG_ID },
  inLanguage: 'en-US',
};

// WebApplication schema - ONLY included on home page where the product is described
// Screenshots use stable paths from public/screenshots/ (not hashed by Vite)
const webApplicationSchema = {
  '@type': 'WebApplication',
  '@id': APP_ID,
  name: SITE_NAME,
  url: SITE_URL,
  applicationCategory: 'DesignApplication',
  operatingSystem: 'Any',
  description: DEFAULT_DESCRIPTION,
  publisher: { '@id': ORG_ID },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    lowPrice: '0',
    highPrice: '29',
    offerCount: 3,
  },
  screenshot: [
    {
      '@type': 'ImageObject',
      url: `${SITE_URL}/screenshots/screenshot-create-layout.png`,
      caption: 'Create any layout to fit your needs',
      creditText: SITE_NAME,
    },
    {
      '@type': 'ImageObject',
      url: `${SITE_URL}/screenshots/screenshot-collaborate.png`,
      caption: 'Work together to plan collaborative displays',
      creditText: SITE_NAME,
    },
    {
      '@type': 'ImageObject',
      url: `${SITE_URL}/screenshots/screenshot-custom-shapes.png`,
      caption: 'Add custom shapes, baseplates, and labels',
      creditText: SITE_NAME,
    },
  ],
};

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SeoProps {
  title: string;
  description?: string;
  path: string;
  pageType?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
  image?: string;
  breadcrumbs?: BreadcrumbItem[];
  additionalSchemas?: object[];
  dateModified?: string;
  /** Include WebApplication schema - only set true on home page where product is described */
  includeAppSchema?: boolean;
}

export function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  path,
  pageType = 'WebPage',
  image = DEFAULT_IMAGE,
  breadcrumbs = [],
  additionalSchemas = [],
  dateModified,
  includeAppSchema = false,
}: SeoProps) {
  const canonicalUrl = `${SITE_URL}${path}`;
  const fullTitle = path === '/' ? title : `${title} | ${SITE_NAME}`;

  // Build breadcrumb schema if provided
  const breadcrumbSchema = breadcrumbs.length > 0
    ? {
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      itemListElement: breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    }
    : null;

  // Build WebPage schema for this route
  const webPageSchema: Record<string, unknown> = {
    '@type': pageType,
    '@id': `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: title,
    description,
    isPartOf: { '@id': WEBSITE_ID },
    // Only reference the app if we're including it on this page
    ...(includeAppSchema ? { about: { '@id': APP_ID } } : { about: { '@id': ORG_ID } }),
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-US',
    ...(breadcrumbSchema ? { breadcrumb: { '@id': breadcrumbSchema['@id'] } } : {}),
    ...(includeAppSchema ? { primaryImageOfPage: { '@type': 'ImageObject', url: image } } : {}),
    ...(dateModified ? { dateModified } : {}),
  };

  // Build the @graph array - only include app schema when explicitly requested
  const graphItems = [
    organizationSchema,
    websiteSchema,
    ...(includeAppSchema ? [webApplicationSchema] : []),
    webPageSchema,
    ...(breadcrumbSchema ? [breadcrumbSchema] : []),
    ...additionalSchemas,
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': graphItems,
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@BrickLayouts" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}

// Export constants for use in route components
export {
  SITE_URL, SITE_NAME, ORG_ID, WEBSITE_ID, APP_ID,
};
