import * as assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  EGYPT_MARKET_DEALERS,
  EGYPT_MARKET_MAKES,
  EGYPT_MARKET_SOURCE,
} from './egypt-market-data';

test('Egypt market snapshot has the researched coverage', () => {
  assert.equal(EGYPT_MARKET_SOURCE.makeCount, 74);
  assert.equal(EGYPT_MARKET_SOURCE.modelCount, 354);
  assert.equal(EGYPT_MARKET_SOURCE.variantCount, 779);
  assert.equal(EGYPT_MARKET_SOURCE.dealerCount, 75);
  assert.equal(EGYPT_MARKET_MAKES.length, 74);
  assert.equal(EGYPT_MARKET_DEALERS.length, 75);
});

test('catalog slugs are unique at their database boundaries', () => {
  assert.equal(new Set(EGYPT_MARKET_MAKES.map((make) => make.slug)).size, EGYPT_MARKET_MAKES.length);
  for (const make of EGYPT_MARKET_MAKES) {
    assert.equal(new Set(make.models.map((model) => model.slug)).size, make.models.length, make.nameEn);
    for (const model of make.models) {
      const variantKeys = model.variants.map((variant) => `${variant.slug}:${variant.year}`);
      assert.equal(new Set(variantKeys).size, variantKeys.length, `${make.nameEn} ${model.nameEn}`);
      assert.ok(model.variants.every((variant) => variant.price > 0));
    }
  }
  assert.equal(new Set(EGYPT_MARKET_DEALERS.map((dealer) => dealer.slug)).size, EGYPT_MARKET_DEALERS.length);
});
