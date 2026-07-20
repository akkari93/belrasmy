import { PrismaClient } from "@prisma/client";
import { PrismaBetterSQLite3Adapter } from "@prisma/adapter-better-sqlite3";
import BetterSqlite3 from "better-sqlite3";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient(): PrismaClient {
  if (process.env.DATABASE_URL?.startsWith("postgresql")) {
    // For PostgreSQL (production/Coolify)
    return new PrismaClient();
  }

  // For SQLite (development)
  const connection = new BetterSqlite3(process.env.DATABASE_URL || "./prisma/dev.db");
  const adapter = new PrismaBetterSQLite3Adapter(connection);
  return new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
