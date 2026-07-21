import bcrypt from 'bcryptjs';
import { prisma } from './prisma';

export async function bootstrapAdminFromEnv() {
  const adminUsername = process.env.ADMIN_USERNAME?.trim();
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminUsername || !adminPassword) {
    throw new Error('ADMIN_USERNAME and ADMIN_PASSWORD are required for admin bootstrap');
  }
  if (adminPassword.length < 16) {
    throw new Error('ADMIN_PASSWORD must be at least 16 characters');
  }

  const passwordHash = await bcrypt.hash(adminPassword, 12);
  await prisma.adminUser.upsert({
    where: { username: adminUsername },
    update: { passwordHash, isActive: true },
    create: { username: adminUsername, passwordHash },
  });
}
