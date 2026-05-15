import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('home page exposes the core archive navigation', async ({ page }) => {
  await page.goto('/');
  await expect(
    page.getByRole('heading', {
      name: /How vehicles became modern mobility systems/i,
    }),
  ).toBeVisible();
  await expect(page.locator('a[href="/timeline/"]')).toHaveCount(0);
  await expect(
    page.getByRole('link', { name: 'Eras', exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Technologies', exact: true }),
  ).toBeVisible();
});

test('standalone timeline route is not generated', async ({ page }) => {
  const response = await page.goto('/timeline/');
  expect(response?.status()).toBe(404);
});

test('eras page presents the archive as a chronological spine', async ({
  page,
}) => {
  await page.goto('/eras/');
  await expect(
    page.getByRole('heading', { name: 'A Scrollable Technical Spine' }),
  ).toBeVisible();
  await expect(page.locator('.era-timeline')).toBeVisible();
  await expect(
    page.getByRole('link', { name: /Early Self-Propelled Mobility/i }),
  ).toBeVisible();
  await expect(
    page.getByRole('link', {
      name: /Software-Defined and Connected Vehicles/i,
    }),
  ).toBeVisible();
});

test('technology pages render sources and related links', async ({ page }) => {
  await page.goto('/technologies/battery-electric-vehicle/');
  await expect(
    page.getByRole('heading', { name: 'Battery Electric Vehicle' }),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Sources and Further Reading' }),
  ).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Lithium Ion Battery' }),
  ).toBeVisible();
});

test('home page has no automatically detectable accessibility violations', async ({
  page,
}) => {
  await page.goto('/');
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
