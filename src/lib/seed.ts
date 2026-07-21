import { prisma } from './prisma';
import bcrypt from 'bcryptjs';
import {
  EGYPT_MARKET_DEALERS,
  EGYPT_MARKET_MAKES,
  EGYPT_MARKET_SOURCE,
} from './egypt-market-data';

async function main() {
  console.log('Seeding database...');

  const adminUsername = process.env.ADMIN_USERNAME?.trim();
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminUsername || !adminPassword) {
    if (process.env.NODE_ENV === 'production') {
      throw new Error('ADMIN_USERNAME and ADMIN_PASSWORD are required for production seeding');
    }
    console.warn('Skipping admin seed: ADMIN_USERNAME and ADMIN_PASSWORD are not configured.');
  } else {
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

  // Settings
  await prisma.setting.upsert({
    where: { key: 'report_threshold' },
    update: {},
    create: { key: 'report_threshold', value: '3' },
  });

  // Dealer/showroom directory from the Egypt-market source snapshot.
  for (const dealer of EGYPT_MARKET_DEALERS) {
    await prisma.dealer.upsert({
      where: { slug: dealer.slug },
      update: {
        nameEn: dealer.nameEn,
        nameAr: dealer.nameAr,
        city: dealer.city,
        governorate: dealer.governorate,
        phone: dealer.phone,
        isActive: true,
      },
      create: { ...dealer, isActive: true },
    });
  }

  // Makes, models, variants, and source price snapshots.
  for (const makeData of EGYPT_MARKET_MAKES) {
    const make = await prisma.make.upsert({
      where: { slug: makeData.slug },
      update: {
        nameEn: makeData.nameEn,
        nameAr: makeData.nameAr,
      },
      create: {
        nameEn: makeData.nameEn,
        nameAr: makeData.nameAr,
        slug: makeData.slug,
      },
    });

    for (const modelData of makeData.models) {
      const model = await prisma.model.upsert({
        where: { makeId_slug: { makeId: make.id, slug: modelData.slug } },
        update: {
          nameEn: modelData.nameEn,
          nameAr: modelData.nameAr,
          yearStart: modelData.yearStart,
          yearEnd: modelData.yearEnd,
        },
        create: {
          makeId: make.id,
          nameEn: modelData.nameEn,
          nameAr: modelData.nameAr,
          slug: modelData.slug,
          yearStart: modelData.yearStart,
          yearEnd: modelData.yearEnd,
        },
      });

      for (const variantData of modelData.variants) {
        const variant = await prisma.variant.upsert({
          where: {
            modelId_slug_year: {
              modelId: model.id,
              slug: variantData.slug,
              year: variantData.year,
            },
          },
          update: {
            nameEn: variantData.nameEn,
            nameAr: variantData.nameAr,
            engine: variantData.engine,
          },
          create: {
            modelId: model.id,
            nameEn: variantData.nameEn,
            nameAr: variantData.nameAr,
            slug: variantData.slug,
            year: variantData.year,
            engine: variantData.engine,
          },
        });

        const existingPrice = await prisma.price.findFirst({
          where: {
            variantId: variant.id,
            source: 'contactcars_catalog',
            isActive: true,
          },
        });

        if (existingPrice) {
          await prisma.price.update({
            where: { id: existingPrice.id },
            data: {
              amount: variantData.price,
              sourceDate: new Date(EGYPT_MARKET_SOURCE.retrievedOn),
              sourceUrl: EGYPT_MARKET_SOURCE.catalogUrl,
            },
          });
        } else {
          await prisma.price.create({
            data: {
              variantId: variant.id,
              amount: variantData.price,
              source: 'contactcars_catalog',
              sourceUrl: EGYPT_MARKET_SOURCE.catalogUrl,
              sourceDate: new Date(EGYPT_MARKET_SOURCE.retrievedOn),
              isActive: true,
            },
          });
        }
      }
    }
  }

  console.log(
    `Seed complete: ${EGYPT_MARKET_SOURCE.makeCount} makes, ` +
      `${EGYPT_MARKET_SOURCE.modelCount} models, ` +
      `${EGYPT_MARKET_SOURCE.variantCount} variants, and ` +
      `${EGYPT_MARKET_SOURCE.dealerCount} dealers from ${EGYPT_MARKET_SOURCE.provider}.`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
