# Belrasmy

Belrasmy is a bilingual Arabic/English community price-reporting application for the Egyptian car market.

## Development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm test
npm run build
npm run test:e2e
```

The browser suite uses Playwright and supports a remote target through `BASE_URL`:

```bash
BASE_URL=https://staging.example.test \
E2E_ADMIN_USERNAME=admin \
E2E_ADMIN_PASSWORD='[staging secret]' \
npm run test:e2e
```

The suite covers:

- populated public homepage, car, dealer, submission, and success routes;
- report submission → success → homepage regression;
- public report/flag submission;
- exact privacy-safe public API shape;
- Arabic/English switching and mobile overflow;
- unauthenticated admin redirects and `401` API responses;
- authenticated admin pages and read APIs when staging credentials are supplied.

## Database and seeding

The application expects a PostgreSQL `DATABASE_URL`.

Schema synchronization runs at container startup. Data seeding is explicit and is **not** run on every container restart:

```bash
ADMIN_USERNAME=admin \
ADMIN_PASSWORD='[strong secret, 16+ characters]' \
npm run seed
```

Production seeding refuses to run without both admin variables and rejects passwords shorter than 16 characters. Never commit or print the real values.

## Deployment

Coolify is the deployment target. Keep `DATABASE_URL`, `ADMIN_USERNAME`, and `ADMIN_PASSWORD` in Coolify-managed runtime variables. Deploy the `ds4pro` branch to staging first; production requires separate approval and exact target/SHA validation.
