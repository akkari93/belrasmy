import { bootstrapAdminFromEnv } from './admin-bootstrap';
import { prisma } from './prisma';

bootstrapAdminFromEnv()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });