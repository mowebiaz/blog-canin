# Caniliane

A full-stack blog website for dog-related content, built with Next.js App Router and PayloadCMS. It features a fully managed blog with categories, search, SEO, redirects, live preview, a contact form, and a custom Payload admin panel.

## Tech Stack

- **[Next.js 15](https://nextjs.org/)**
- **[React 19](https://react.dev/)** 
- **[PayloadCMS v3](https://payloadcms.com/)** — Headless CMS with custom admin UI
- **[SCSS](https://sass-lang.com/)** — Styling (no Tailwind)
- **[Vercel Postgres](https://vercel.com/storage/postgres)** — Database
- **[Cloudflare R2](https://www.cloudflare.com/developer-platform/products/r2/)** (S3-compatible) — Media storage
- **[Resend](https://resend.com/)** — Transactional email
- **[Motion](https://motion.dev/)** — Animations
- **[React Aria Components](https://react-spectrum.adobe.com/react-aria/)** — Accessible UI primitives
- **[Google Maps](https://developers.google.com/maps)** — Embedded map (click-to-load, no cookie banner needed)
- **[Vercel](https://vercel.com/)** — Deployment

## Getting Started

### Prerequisites

You will need active accounts and credentials for: Vercel Postgres, an S3-compatible storage provider (e.g. Cloudflare R2), Resend, and Google Maps.

### Installation

```bash
npm install
```

Environment variables: fill in the required values (see [Environment Variables](#environment-variables) below).

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site and [http://localhost:3000/admin](http://localhost:3000/admin) for the CMS admin panel.

### Other scripts

```bash
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run payload      # Run Payload CLI
npm run ci           # Run migrations then build (CI)
```

## Environment Variables

```env
# App URLs
NEXT_PUBLIC_SERVER_URL=
SITE_URL_PROD=
SITE_URL_DEV=

# Payload CMS
PAYLOAD_SECRET=
PREVIEW_SECRET=

# Database (Vercel Postgres: Neon)
DATABASE_URL=
DATABASE_URL_UNPOOLED=

# S3 / Cloudflare R2 media storage
S3_BUCKET=
S3_ACCESSKEY_ID=
S3_SECRET=
S3_ENDPOINT=
S3_PUBLIC_MEDIA_URL=

# Email (Resend)
RESEND_API_KEY=
RESEND_FROM=
RESEND_FROM_NAME=
EMAIL=

# Google Maps
NEXT_PUBLIC_GOOGLE_MAP_API_KEY=
```
