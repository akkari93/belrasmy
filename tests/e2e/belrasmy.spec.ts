import { expect, test, type Page } from '@playwright/test';

type BrowserDiagnostics = {
  pageErrors: string[];
  consoleErrors: string[];
  serverErrors: string[];
};

const diagnostics = new WeakMap<Page, BrowserDiagnostics>();

function installDiagnostics(page: Page) {
  const value: BrowserDiagnostics = { pageErrors: [], consoleErrors: [], serverErrors: [] };
  diagnostics.set(page, value);
  page.on('pageerror', (error) => value.pageErrors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') value.consoleErrors.push(message.text());
  });
  page.on('response', (response) => {
    if (response.status() >= 500) value.serverErrors.push(`${response.status()} ${response.url()}`);
  });
}

test.beforeEach(async ({ page }) => {
  installDiagnostics(page);
});

test.afterEach(async ({ page }, testInfo) => {
  const value = diagnostics.get(page);
  if (!value) return;
  await testInfo.attach('browser-diagnostics.json', {
    body: JSON.stringify(value, null, 2),
    contentType: 'application/json',
  });
  expect(value.pageErrors, 'browser page errors').toEqual([]);
  expect(value.consoleErrors, 'browser console errors').toEqual([]);
  expect(value.serverErrors, 'server 5xx responses').toEqual([]);
});

async function chooseOption(page: Page, index: number, query: string, option: RegExp) {
  const input = page.getByRole('combobox').nth(index);
  await expect(input).toBeVisible();
  await input.fill(query);
  await page.getByRole('option', { name: option }).first().click();
}

async function completeSubmission(page: Page) {
  await page.goto('/submit', { waitUntil: 'networkidle' });
  await expect(page.getByRole('combobox')).toHaveCount(4);
  await chooseOption(page, 0, 'Audi', /Audi|أودي/);
  await chooseOption(page, 1, 'A6', /A6/);
  await chooseOption(page, 2, 'S-Line', /S-Line|S لاين/i);
  await chooseOption(page, 3, '2M', /2M|تو ام/i);

  await page.getByRole('button', { name: /التالي|Next/ }).click();
  await page.locator('input[type="number"]').fill('1234567');
  await page.locator('input[type="date"]').first().fill('2026-07-20');
  await page.getByRole('button', { name: /التالي|Next/ }).click();
  await page.getByRole('checkbox').check();

  const post = page.waitForResponse((response) =>
    response.url().includes('/api/submissions') && response.request().method() === 'POST',
  );
  await page.getByRole('button', { name: /إرسال التقرير|Submit Report/ }).click();
  const response = await post;
  expect(response.status()).toBe(201);
  const payload = await response.json();
  expect(payload).toEqual({ id: expect.any(String) });

  await expect(page).toHaveURL(/\/submit\/success\?id=/);
  await expect(page.getByText(/تم الإرسال بنجاح|Submission Successful/)).toBeVisible();
  await page.getByRole('link', { name: /الصفحة الرئيسية|Back to Homepage|Home/ }).click();
  await expect(page).toHaveURL(/\/$/);
  await expect(page.getByText(/آخر التقارير المؤكدة|Latest Verified Reports/)).toBeVisible();
}

test('public routes render populated data without runtime errors', async ({ page }) => {
  for (const path of ['/', '/submit', '/submit/success', '/car/audi/a6', '/dealer/2m-motors']) {
    await page.goto(path, { waitUntil: 'networkidle' });
    await expect(page.locator('body')).not.toContainText(/cannot load|application error|internal server error/i);
  }
});

test('public submission API keeps an exact privacy-safe nested contract', async ({ page }) => {
  const response = await page.request.get('/api/submissions');
  expect(response.status()).toBe(200);
  const payload = await response.json();
  expect(Array.isArray(payload)).toBe(true);
  if (payload.length === 0) return;

  const submission = payload[0];
  expect(Object.keys(submission).sort()).toEqual([
    'createdAt', 'deliveryDate', 'deliveryTiming', 'dealer', 'id',
    'officialPrice', 'purchaseDate', 'purchasePrice', 'status', 'variant',
  ]);
  expect(submission.dealer).not.toHaveProperty('phone');
  expect(submission.dealer).not.toHaveProperty('website');
  expect(submission.variant).not.toHaveProperty('createdAt');
  expect(submission.variant.model).not.toHaveProperty('yearStart');
  expect(submission.variant.model.make).not.toHaveProperty('updatedAt');
  expect(submission).not.toHaveProperty('phone');
  expect(submission).not.toHaveProperty('evidenceUrl');
});

test('price report returns to a working homepage', async ({ page }) => {
  await completeSubmission(page);
});

test('homepage report modal submits and remains usable', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  const reportButton = page.getByRole('button', { name: /الإبلاغ عن هذا التقرير|Report this submission/ }).first();
  await expect(reportButton).toBeVisible();
  await reportButton.click();
  await page.locator('select').last().selectOption('incorrect_price');
  await page.getByRole('button', { name: /إرسال|Submit/ }).last().click();
  await expect(page.getByText(/تم الإبلاغ بنجاح|Report submitted, thank you/)).toBeVisible();
  await page.waitForTimeout(1700);
  await expect(page).toHaveURL(/\/$/);
  await expect(page.getByText(/آخر التقارير المؤكدة|Latest Verified Reports/)).toBeVisible();
});

test('locale toggle and mobile layout remain usable', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  const toggle = page.getByRole('button', { name: 'EN' });
  await expect(toggle).toBeVisible();
  await toggle.click();
  await expect(page.getByRole('button', { name: 'AR' })).toBeVisible();
  await expect(page.locator('main')).toHaveAttribute('dir', 'ltr');
  const metrics = await page.evaluate(() => ({
    viewport: window.innerWidth,
    documentWidth: document.documentElement.scrollWidth,
    bodyWidth: document.body.scrollWidth,
  }));
  expect(metrics.documentWidth).toBeLessThanOrEqual(metrics.viewport + 1);
  expect(metrics.bodyWidth).toBeLessThanOrEqual(metrics.viewport + 1);
});

test('admin routes fail closed without a session', async ({ page }) => {
  await page.goto('/admin/cars', { waitUntil: 'networkidle' });
  await expect(page).toHaveURL(/\/admin\/login$/);
  for (const path of ['/api/admin/makes', '/api/admin/dealers', '/api/admin/submissions', '/api/admin/reports', '/api/admin/settings']) {
    expect((await page.request.get(path)).status()).toBe(401);
  }
});

test('authenticated admin pages and APIs are reachable', async ({ page }) => {
  const username = process.env.E2E_ADMIN_USERNAME;
  const password = process.env.E2E_ADMIN_PASSWORD;
  test.skip(!username || !password, 'E2E_ADMIN_USERNAME/E2E_ADMIN_PASSWORD are required for authenticated staging QA');

  await page.goto('/admin/login', { waitUntil: 'networkidle' });
  await page.locator('input[type="text"]').fill(username!);
  await page.locator('input[type="password"]').fill(password!);
  const login = page.waitForResponse((response) =>
    response.url().includes('/api/admin/login') && response.request().method() === 'POST',
  );
  await page.getByRole('button', { name: /تسجيل الدخول|Login/ }).click();
  expect((await login).status()).toBe(200);
  await expect(page).toHaveURL(/\/admin$/);

  for (const path of ['/admin', '/admin/submissions', '/admin/dealers', '/admin/cars', '/admin/settings']) {
    await page.goto(path, { waitUntil: 'networkidle' });
    await expect(page).toHaveURL(new RegExp(`${path.replace(/\//g, '\\/')}$`));
    await expect(page.locator('body')).not.toContainText(/cannot load|application error|internal server error/i);
  }
  for (const path of ['/api/admin/makes', '/api/admin/dealers', '/api/admin/submissions', '/api/admin/reports', '/api/admin/settings']) {
    expect((await page.request.get(path)).status()).toBe(200);
  }
});
