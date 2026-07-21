import * as assert from 'node:assert/strict';
import { test } from 'node:test';
import { serializeSubmission } from './submission-view';

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
    phone: null,
    evidenceUrl: null,
    notes: null,
    purchaserName: null,
    status: 'PUBLISHED',
    createdAt,
    dealer: {
      id: 'dealer-1',
      nameEn: '2M Motors',
      nameAr: '2M موتورز',
      slug: '2m-motors',
      city: 'Cairo',
      governorate: 'Cairo',
    },
    variant: {
      id: 'variant-1',
      nameEn: 'S-Line Plus',
      nameAr: 'S-Line Plus',
      slug: 's-line-plus',
      year: 2026,
      engine: '2.0L',
      model: {
        id: 'model-1',
        nameEn: 'A6',
        nameAr: 'A6',
        slug: 'a6',
        make: {
          id: 'make-1',
          nameEn: 'Audi',
          nameAr: 'أودي',
          slug: 'audi',
        },
      },
    },
  });

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
