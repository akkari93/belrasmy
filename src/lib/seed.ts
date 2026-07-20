import { prisma } from './prisma';
import bcrypt from 'bcryptjs';

async function main() {
  console.log('Seeding database...');
  
  // Admin user
  const passwordHash = await bcrypt.hash('admin123', 10);
  await prisma.adminUser.upsert({
    where: { username: 'admin' },
    update: {},
    create: { username: 'admin', passwordHash }
  });
  
  // Settings
  await prisma.setting.upsert({
    where: { key: 'report_threshold' },
    update: {},
    create: { key: 'report_threshold', value: '3' }
  });
  
  // Dealers
  const dealers = [
    { nameEn: 'Modern Commercial Agencies', nameAr: 'التوكيلات التجارية الحديثة', slug: 'modern-commercial-agencies', city: 'Cairo', governorate: 'Cairo' },
    { nameEn: 'GB Ghabbour Auto', nameAr: 'مجموعة جي بي غبور أوتو', slug: 'gb-ghabbour-auto', city: 'Cairo', governorate: 'Cairo' },
    { nameEn: 'Mansour Automotive', nameAr: 'مجموعة المنصور للسيارات', slug: 'mansour-automotive', city: 'Cairo', governorate: 'Cairo' },
    { nameEn: 'Kayan Group', nameAr: 'مجموعة كيان', slug: 'kayan-group', city: 'Alexandria', governorate: 'Alexandria' },
    { nameEn: 'Al Ba Group', nameAr: 'مجموعة البا جروب', slug: 'al-ba-group', city: 'Cairo', governorate: 'Cairo' },
    { nameEn: 'Al Futtaim Automotive', nameAr: 'مجموعة الفطيم للسيارات', slug: 'al-futtaim-automotive', city: 'Cairo', governorate: 'Cairo' },
    { nameEn: 'Elesewedy Automotive', nameAr: 'مجموعة العيسوي للسيارات', slug: 'elesewedy-automotive', city: 'Cairo', governorate: 'Cairo' },
    { nameEn: 'Premier Motors', nameAr: 'شركة بريميير موتورز', slug: 'premier-motors', city: 'Cairo', governorate: 'Cairo' },
    { nameEn: 'Auto Motor Group', nameAr: 'مجموعة اوتو موتور', slug: 'auto-motor-group', city: 'Giza', governorate: 'Giza' },
    { nameEn: 'Alhekma Automotive', nameAr: 'شركة الحكمة للسيارات', slug: 'alhekma-automotive', city: 'Cairo', governorate: 'Cairo' },
  ];
  
  for (const dealer of dealers) {
    await prisma.dealer.upsert({
      where: { slug: dealer.slug },
      update: {},
      create: { ...dealer, isActive: true }
    });
  }
  
  // Makes, Models, Variants, Prices
  const makesData = [
    {
      nameEn: 'Toyota', nameAr: 'تويوتا', slug: 'toyota',
      models: [
        { nameEn: 'Corolla', nameAr: 'كورولا', slug: 'corolla', yearStart: 2024, yearEnd: 2026,
          variants: [
            { nameEn: '1.6 Standard', nameAr: '1.6 ستاندرد', slug: '1-6-standard', year: 2025, price: 1150000 },
            { nameEn: '1.6 Standard', nameAr: '1.6 ستاندرد', slug: '1-6-standard-2026', year: 2026, price: 1200000 },
          ]
        },
        { nameEn: 'Yaris', nameAr: 'ياريس', slug: 'yaris', yearStart: 2024, yearEnd: 2026,
          variants: [
            { nameEn: '1.5 Active', nameAr: '1.5 اكتيف', slug: '1-5-active', year: 2025, price: 850000 },
            { nameEn: '1.5 Active', nameAr: '1.5 اكتيف', slug: '1-5-active-2026', year: 2026, price: 900000 },
          ]
        },
      ]
    },
    {
      nameEn: 'Hyundai', nameAr: 'هيونداي', slug: 'hyundai',
      models: [
        { nameEn: 'Elantra', nameAr: 'إلنترا', slug: 'elantra', yearStart: 2024, yearEnd: 2026,
          variants: [
            { nameEn: '1.6 GL', nameAr: '1.6 GL', slug: '1-6-gl', year: 2025, price: 950000 },
            { nameEn: '1.6 GL', nameAr: '1.6 GL', slug: '1-6-gl-2026', year: 2026, price: 1000000 },
          ]
        },
        { nameEn: 'Tucson', nameAr: 'توسان', slug: 'tucson', yearStart: 2024, yearEnd: 2026,
          variants: [
            { nameEn: '2.0 Smart', nameAr: '2.0 سمارت', slug: '2-0-smart', year: 2025, price: 1350000 },
            { nameEn: '2.0 Smart', nameAr: '2.0 سمارت', slug: '2-0-smart-2026', year: 2026, price: 1400000 },
          ]
        },
      ]
    },
    {
      nameEn: 'Nissan', nameAr: 'نيسان', slug: 'nissan',
      models: [
        { nameEn: 'Sunny', nameAr: 'صني', slug: 'sunny', yearStart: 2024, yearEnd: 2026,
          variants: [
            { nameEn: '1.5 Base', nameAr: '1.5 قاعدة', slug: '1-5-base', year: 2025, price: 750000 },
            { nameEn: '1.5 Base', nameAr: '1.5 قاعدة', slug: '1-5-base-2026', year: 2026, price: 800000 },
          ]
        },
        { nameEn: 'Qashqai', nameAr: 'كاشكاي', slug: 'qashqai', yearStart: 2024, yearEnd: 2026,
          variants: [
            { nameEn: '1.6 Active', nameAr: '1.6 اكتيف', slug: '1-6-active', year: 2025, price: 1450000 },
            { nameEn: '1.6 Active', nameAr: '1.6 اكتيف', slug: '1-6-active-2026', year: 2026, price: 1500000 },
          ]
        },
      ]
    },
    {
      nameEn: 'Chevrolet', nameAr: 'شيفروليه', slug: 'chevrolet',
      models: [
        { nameEn: 'Optra', nameAr: 'أوبترا', slug: 'optra', yearStart: 2024, yearEnd: 2026,
          variants: [
            { nameEn: '1.5 LS', nameAr: '1.5 LS', slug: '1-5-ls', year: 2025, price: 820000 },
            { nameEn: '1.5 LS', nameAr: '1.5 LS', slug: '1-5-ls-2026', year: 2026, price: 870000 },
          ]
        },
        { nameEn: 'Tahoe', nameAr: 'تاهو', slug: 'tahoe', yearStart: 2024, yearEnd: 2026,
          variants: [
            { nameEn: '5.3 LTZ', nameAr: '5.3 LTZ', slug: '5-3-ltz', year: 2025, price: 3200000 },
            { nameEn: '5.3 LTZ', nameAr: '5.3 LTZ', slug: '5-3-ltz-2026', year: 2026, price: 3350000 },
          ]
        },
      ]
    },
    {
      nameEn: 'Kia', nameAr: 'كيا', slug: 'kia',
      models: [
        { nameEn: 'Cerato', nameAr: 'سيراتو', slug: 'cerato', yearStart: 2024, yearEnd: 2026,
          variants: [
            { nameEn: '1.6 LX', nameAr: '1.6 LX', slug: '1-6-lx', year: 2025, price: 920000 },
            { nameEn: '1.6 LX', nameAr: '1.6 LX', slug: '1-6-lx-2026', year: 2026, price: 970000 },
          ]
        },
        { nameEn: 'Sportage', nameAr: 'سبورتاج', slug: 'sportage', yearStart: 2024, yearEnd: 2026,
          variants: [
            { nameEn: '2.0 LX', nameAr: '2.0 LX', slug: '2-0-lx', year: 2025, price: 1400000 },
            { nameEn: '2.0 LX', nameAr: '2.0 LX', slug: '2-0-lx-2026', year: 2026, price: 1450000 },
          ]
        },
      ]
    },
  ];
  
  for (const makeData of makesData) {
    const make = await prisma.make.upsert({
      where: { slug: makeData.slug },
      update: {},
      create: { nameEn: makeData.nameEn, nameAr: makeData.nameAr, slug: makeData.slug }
    });
    
    for (const modelData of makeData.models) {
      const model = await prisma.model.upsert({
        where: { makeId_slug: { makeId: make.id, slug: modelData.slug } },
        update: {},
        create: {
          makeId: make.id,
          nameEn: modelData.nameEn,
          nameAr: modelData.nameAr,
          slug: modelData.slug,
          yearStart: modelData.yearStart,
          yearEnd: modelData.yearEnd
        }
      });
      
      for (const variantData of modelData.variants) {
        const variant = await prisma.variant.upsert({
          where: { modelId_slug_year: { modelId: model.id, slug: variantData.slug, year: variantData.year } },
          update: {},
          create: {
            modelId: model.id,
            nameEn: variantData.nameEn,
            nameAr: variantData.nameAr,
            slug: variantData.slug,
            year: variantData.year
          }
        });
        
        await prisma.price.create({
          data: {
            variantId: variant.id,
            amount: variantData.price,
            source: 'manufacturer',
            sourceDate: new Date(),
            isActive: true
          }
        });
      }
    }
  }
  
  console.log('Seed complete! Created admin user, settings, dealers, makes, models, variants, and prices.');
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
