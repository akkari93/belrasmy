# Use Node.js base image
FROM node:22-alpine AS base

# Install OpenSSL for Prisma and curl for Coolify health checks
RUN apk add --no-cache openssl curl

# Dependencies stage
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --include=dev

# Builder stage
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV DATABASE_URL="postgresql://placeholder:***@localhost:5432/placeholder"

RUN npx prisma generate
RUN npm run build

# Runner stage
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/prisma.config.ts ./prisma.config.ts
COPY --from=builder /app/src/lib ./src/lib
COPY --from=builder /app/node_modules ./node_modules

RUN chown -R nextjs:nodejs /app
USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["sh", "-c", "node node_modules/prisma/build/index.js db push && node node_modules/tsx/dist/cli.mjs src/lib/bootstrap-admin.ts && node server.js"]
