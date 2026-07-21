import * as assert from 'node:assert/strict';
import { test } from 'node:test';
import { serializeSubmission, type SubmissionWithRelations } from './submission-view';

test('serializes public submissions using the nested shape consumed by the homepage', () => {
  const purchaseDate = new Date('2026-07-21T00:00:00.000Z');
  const createdAt = new Date('2026-07-21T07:03:09.428Z');
  const serialized = serializeSubmission({
    id: 'submission-1',
    purchasePrice: 2000000,
    officialPrice: 2100000,
    purchaseDate,
    deliveryDate: null,
    deliveryTiming: 'immediate',

    status: 'PUBLISHED',
    createdAt,
    updatedAt: createdAt,
    reportCount: 99,
    ipAddress: '127.0.0.1',
    dealer: {
      id: 'dealer-1',
      nameEn: '2M Motors',
      nameAr: '2M موتورز',
      slug: '2m-motors',
      city: 'Cairo',
      governorate: 'Cairo',
      phone: '+20 100 000 0000',
      website: 'https://example.invalid',
      isActive: true,
      createdAt,
      updatedAt: createdAt,
    },
    variant: {
      id: 'variant-1',
      nameEn: 'S-Line Plus',
      nameAr: 'S-Line Plus',
      slug: 's-line-plus',
      year: 2026,
      engine: '2.0L',
      createdAt,
      updatedAt: createdAt,
      model: {
        id: 'model-1',
        nameEn: 'A6',
        nameAr: 'A6',
        slug: 'a6',
        createdAt,
        updatedAt: createdAt,
        make: {
          id: 'make-1',
          nameEn: 'Audi',
          nameAr: 'أودي',
          slug: 'audi',
          createdAt,
          updatedAt: createdAt,
        },
      },
    },
  } as SubmissionWithRelations);

  assert.deepEqual(Object.keys(serialized).sort(), [
    'createdAt',
    'dealer',
    'deliveryDate',
    'deliveryTiming',
    'id',
    'officialPrice',
    'purchaseDate',
    'purchasePrice',
    'status',
    'variant',
  ]);
  assert.deepEqual(Object.keys(serialized.dealer).sort(), [
    'city',
    'governorate',
    'id',
    'nameAr',
    'nameEn',
    'slug',
  ]);
  assert.deepEqual(Object.keys(serialized.variant).sort(), [
    'engine',
    'id',
    'model',
    'nameAr',
    'nameEn',
    'slug',
    'year',
  ]);
  assert.deepEqual(Object.keys(serialized.variant.model).sort(), [
    'id',
    'make',
    'nameAr',
    'nameEn',
    'slug',
  ]);
  assert.deepEqual(Object.keys(serialized.variant.model.make).sort(), [
    'id',
    'nameAr',
    'nameEn',
    'slug',
  ]);
  assert.equal(serialized.variant.model.make.nameEn, 'Audi');
  assert.equal(serialized.variant.model.nameEn, 'A6');
  assert.equal(serialized.variant.nameEn, 'S-Line Plus');
  assert.equal(serialized.dealer.nameAr, '2M موتورز');
  assert.equal(serialized.purchaseDate, purchaseDate);
  assert.equal(serialized.status, 'PUBLISHED');
  assert.equal('phone' in serialized, false);
  assert.equal('evidenceUrl' in serialized, false);
  assert.equal('notes' in serialized, false);
  assert.equal('purchaserName' in serialized, false);
});
