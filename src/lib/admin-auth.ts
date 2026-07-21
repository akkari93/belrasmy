import { cookies } from 'next/headers';
import { prisma } from '@/lib/prisma';

export async function isAdminAuthenticated(): Promise<boolean> {
  const token = (await cookies()).get('admin_token')?.value;
  if (!token) return false;

  const storedSetting = await prisma.setting.findUnique({
    where: { key: 'admin_token' },
    select: { value: true },
  });

  return storedSetting?.value === token;
}

export async function requireAdmin(): Promise<Response | null> {
  if (await isAdminAuthenticated()) return null;

  return Response.json({ error: 'Unauthorized' }, { status: 401 });
}
