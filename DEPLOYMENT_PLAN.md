# 🚀 Belrasmy — Coolify Deployment Plan

## Overview

Deploy the **belrasmy** Next.js app on your Coolify instance at **deploy.rightlime.com**.

---

## Step 1: Add Database

In Coolify:
1. Go to **Databases** → **Create New**
2. Choose **PostgreSQL**
3. Set name: `belrasmy-db`
4. Set user: `belrasmy`
5. Set password: *(generate a strong one)*
6. Set database: `belrasmy`
7. Create and note the **internal connection string** (looks like `postgresql://belrasmy:PASSWORD@belrasmy-db:5432/belrasmy`)

---

## Step 2: Add Application

In Coolify:
1. Go to **Applications** → **Create New**
2. Choose **Private Repository** (or Public if the repo is public)
3. Repository: `akkari93/belrasmy`
4. Branch: `main`
5. Build Pack: **Dockerfile** (since we include one)
6. Port: `3000`

---

## Step 3: Set Environment Variables

Add these in the Coolify application settings under **Environment Variables**:

| Variable | Value |
|---|---|
| `DATABASE_URL` | `postgresql://belrasmy:PASSWORD@belrasmy-db:5432/belrasmy` *(use the actual connection string from Step 1)* |
| `ADMIN_USERNAME` | `admin` *(or change this)* |
| `ADMIN_PASSWORD` | *(set a strong password — not "admin123")* |
| `NODE_ENV` | `production` |
| `NEXT_TELEMETRY_DISABLED` | `1` |

---

## Step 4: Deploy and initialize data

1. Deploy the application from Coolify.
2. The container synchronizes the PostgreSQL schema at startup; it does not run the seed automatically.
3. Run the explicit seed command once from an approved container shell or release job, with the Coolify-managed admin variables present:

```bash
npm run seed
```

The seed requires `ADMIN_USERNAME` and an `ADMIN_PASSWORD` of at least 16 characters when `NODE_ENV=production`. Keep these values in Coolify; never place them in the repository or shell history.

---

## Step 5: Verify

1. Visit the staging hostname.
2. Check the homepage and populated public report cards.
3. Submit a test report and verify the success-page link returns to the homepage.
4. Open the admin login page and authenticate with the Coolify-managed staging credentials.
5. Verify the reports dashboard, dealers, cars, settings, and protected API responses.
6. Run `npm run test:e2e` with `BASE_URL` and the staging credentials.

---

## Notes & Caveats

- **Prisma v7** requires driver adapters. The Dockerfile installs `@prisma/adapter-pg` and `pg` for PostgreSQL.
- The **Prisma singleton** in `src/lib/prisma.ts` auto-detects PostgreSQL vs SQLite based on the `DATABASE_URL`.
- **No authentication for public submissions** — this is by design (community-driven). Anti-abuse relies on device fingerprinting + IP logging + the report/auto-hide mechanism.
- **Auto-hide threshold** defaults to 3 reports. Adjust in the admin panel under **Settings**.
- **The seed script must only run once.** Running it again will create duplicate records.
- For **production**, you may want to set up a proper domain and SSL in Coolify.

---

## Future Improvements (Post-MVP)

- [ ] Proper email/password verification for submitters
- [ ] Automated scraping of official car prices from manufacturer/importer websites
- [ ] Search engine optimization (SEO pages)
- [ ] Rate limiting with Redis
- [ ] CDN for static assets
- [ ] Automated database backups
