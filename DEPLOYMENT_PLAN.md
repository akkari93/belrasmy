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

## Step 4: Deploy & Run Migrations

1. Click **Deploy** in Coolify
2. After the first deployment succeeds, you need to run the database migration and seed **once**:

Connect to the Coolify server via SSH and run:

```bash
# Enter the running container
docker exec -it belrasmy-app bash

# Run migrations
npx prisma db push

# Run seed (only once!)
npx tsx src/lib/seed.ts
```

**Important:** After running the seed, immediately change the admin password:

```bash
docker exec -it belrasmy-app bash -c "node -e \"
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();
async function main() {
  const hash = await bcrypt.hash('YOUR_REAL_PASSWORD', 10);
  await prisma.adminUser.update({ where: { username: 'admin' }, data: { passwordHash: hash } });
  console.log('Admin password updated!');
  await prisma.\$disconnect();
}
main();
\""
```

---

## Step 5: Verify

1. Visit `https://belrasmy.yourdomain.com` (or whatever Coolify assigns)
2. Check the homepage loads
3. Try submitting a test report
4. Visit `https://belrasmy.yourdomain.com/admin/login` and log in with `admin` / your password
5. Verify the reports dashboard, dealers, and cars management work

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
