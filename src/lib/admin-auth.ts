import { cookies } from 'next/headers';
import { prisma } from '@/lib/prisma';
import crypto from 'node:crypto';

export const ADMIN_SESSION_TTL_SECONDS = 60 * 60 * 24;

export function hashAdminToken(token: string): string {
  return crypto.createHash('sha256').update(token).digest('hex');
}

export function adminTokenExpiry(now = new Date()): string {
  return new Date(now.getTime() + ADMIN_SESSION_TTL_SECONDS * 1000).toISOString();
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const token = (await cookies()).get('admin_token')?.value;
  if (!token) return false;

  const [storedToken, storedExpiry] = await Promise.all([
    prisma.setting.findUnique({ where: { key: 'admin_token' }, select: { value: true } }),
    prisma.setting.findUnique({ where: { key: 'admin_token_expires_at' }, select: { value: true } }),
  ]);

  if (!storedToken?.value || !storedExpiry?.value) return false;
  const expiresAt = Date.parse(storedExpiry.value);
  if (!Number.isFinite(expiresAt) || expiresAt <= Date.now()) return false;

  const actual = Buffer.from(hashAdminToken(token));
  const expected = Buffer.from(storedToken.value);
  return actual.length === expected.length && crypto.timingSafeEqual(actual, expected);
}

export async function requireAdmin(): Promise<Response | null> {
  if (await isAdminAuthenticated()) return null;

  return Response.json({ error: 'Unauthorized' }, { status: 401 });
}
