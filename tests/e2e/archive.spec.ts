import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import type { Page, TestInfo } from '@playwright/test';

const responsiveViewports = [
  { name: 'desktop', width: 1440, height: 1100 },
  { name: 'mobile', width: 390, height: 1200 },
] as const;

type PageOverflow = {
  bodyScrollWidth: number;
  clientWidth: number;
  scrollWidth: number;
};

type MathBlockMetric = {
  clientWidth: number;
  left: number;
  overflowX: string;
  right: number;
  scrollWidth: number;
  visible: boolean;
};

type EraMarkerMetric = {
  cardStartsAfterMarker: boolean;
  connectorDeltaFromMarker: number;
  markerDeltaFromCardCenter: number;
  markerDeltaFromLine: number;
  markerOffsetFromCardTop: number;
  markerWithinCard: boolean;
};

type VisualSvgMetric = {
  hasDescription: boolean;
  hasRole: boolean;
  hasTitle: boolean;
};

type VisualFigureMetric = {
  captionText: string;
  hasCaption: boolean;
  svgMetrics: VisualSvgMetric[];
};

const visualCoverageRoutes = [
  '/',
  '/eras/',
  '/technologies/',
  '/vehicles/',
  '/controversies/',
  '/glossary/',
  '/sources/',
  '/about/',
  '/search/',
  '/eras/emissions-and-electronic-control/',
  '/technologies/battery-electric-vehicle/',
  '/vehicles/toyota-prius/',
  '/controversies/dieselgate/',
] as const;

async function waitForStableRendering(page: Page): Promise<void> {
  await page.evaluate(() => document.fonts.ready);
}

async function waitForRenderedMath(page: Page): Promise<void> {
  await expect(page.locator('.katex').first()).toBeVisible();
  await page.waitForFunction(() =>
    Array.from(document.querySelectorAll('.katex')).every((element) => {
      const rect = element.getBoundingClientRect();
      const style = window.getComputedStyle(element);

      return (
        rect.width > 0 &&
        rect.height > 0 &&
        style.visibility !== 'hidden' &&
        style.opacity !== '0'
      );
    }),
  );
}

async function expectNoPageHorizontalOverflow(page: Page): Promise<void> {
  const overflow = await page.evaluate<PageOverflow>(() => ({
    bodyScrollWidth: document.body.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));

  expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.clientWidth + 1);
  expect(overflow.bodyScrollWidth).toBeLessThanOrEqual(
    overflow.clientWidth + 1,
  );
}

async function expectAccessibleOriginalVisual(page: Page): Promise<void> {
  const figures = await page.evaluate<VisualFigureMetric[]>(() =>
    Array.from(document.querySelectorAll('figure')).map((figure) => {
      const captionText =
        figure.querySelector('figcaption')?.textContent?.trim() ?? '';

      return {
        captionText,
        hasCaption: captionText.length > 0,
        svgMetrics: Array.from(figure.querySelectorAll('svg')).map((svg) => ({
          hasDescription:
            (svg.querySelector('desc')?.textContent?.trim().length ?? 0) > 0,
          hasRole: svg.getAttribute('role') === 'img',
          hasTitle:
            (svg.querySelector('title')?.textContent?.trim().length ?? 0) > 0,
        })),
      };
    }),
  );

  expect(figures.length).toBeGreaterThan(0);
  expect(
    figures.some(
      (figure) =>
        figure.hasCaption &&
        /original autoevolve diagram/i.test(figure.captionText),
    ),
  ).toBe(true);

  const svgMetrics = figures.flatMap((figure) => figure.svgMetrics);
  expect(svgMetrics.length).toBeGreaterThan(0);

  for (const svg of svgMetrics) {
    expect(svg.hasRole).toBe(true);
    expect(svg.hasTitle).toBe(true);
    expect(svg.hasDescription).toBe(true);
  }
}

async function captureLayoutScreenshot(
  page: Page,
  testInfo: TestInfo,
  name: string,
): Promise<void> {
  await page.screenshot({
    fullPage: true,
    path: testInfo.outputPath(`${name}.png`),
  });
}

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

test('math-heavy pages keep equations visible and horizontally inspectable', async ({
  page,
}, testInfo) => {
  for (const viewport of responsiveViewports) {
    await page.setViewportSize(viewport);
    await page.goto('/technologies/battery-electric-vehicle/');
    await waitForRenderedMath(page);
    await waitForStableRendering(page);
    await expectNoPageHorizontalOverflow(page);
    await expect(
      page.locator('.article-content p .katex').first(),
    ).toBeVisible();

    const mathBlocks = await page.evaluate<MathBlockMetric[]>(() =>
      Array.from(
        document.querySelectorAll<HTMLElement>(
          '.article-content .katex-display',
        ),
      ).map((element) => {
        const rect = element.getBoundingClientRect();
        const style = window.getComputedStyle(element);

        return {
          clientWidth: element.clientWidth,
          left: rect.left,
          overflowX: style.overflowX,
          right: rect.right,
          scrollWidth: element.scrollWidth,
          visible: rect.width > 0 && rect.height > 0,
        };
      }),
    );

    expect(mathBlocks.length).toBeGreaterThan(0);
    for (const block of mathBlocks) {
      expect(block.visible).toBe(true);
      expect(block.left).toBeGreaterThanOrEqual(-1);
      expect(block.right).toBeLessThanOrEqual(viewport.width + 1);
      expect(block.overflowX).toBe('auto');
      expect(block.scrollWidth).toBeGreaterThanOrEqual(block.clientWidth);
    }

    await captureLayoutScreenshot(
      page,
      testInfo,
      `math-inline-${viewport.name}`,
    );

    await page.goto('/eras/emissions-and-electronic-control/');
    await waitForRenderedMath(page);
    await waitForStableRendering(page);
    await expectNoPageHorizontalOverflow(page);

    const widestBlock = await page.evaluate<MathBlockMetric>(() => {
      const element = document.querySelector<HTMLElement>(
        '.article-content .katex-display',
      );

      if (element === null) {
        throw new Error('Expected a rendered KaTeX display block.');
      }

      const rect = element.getBoundingClientRect();
      const style = window.getComputedStyle(element);

      return {
        clientWidth: element.clientWidth,
        left: rect.left,
        overflowX: style.overflowX,
        right: rect.right,
        scrollWidth: element.scrollWidth,
        visible: rect.width > 0 && rect.height > 0,
      };
    });

    expect(widestBlock.visible).toBe(true);
    expect(widestBlock.overflowX).toBe('auto');
    expect(widestBlock.left).toBeGreaterThanOrEqual(-1);
    expect(widestBlock.right).toBeLessThanOrEqual(viewport.width + 1);

    if (viewport.name === 'mobile') {
      expect(widestBlock.scrollWidth).toBeGreaterThan(widestBlock.clientWidth);
    }

    await captureLayoutScreenshot(
      page,
      testInfo,
      `math-overflow-${viewport.name}`,
    );
  }
});

test('eras timeline markers align with cards and connector rails', async ({
  page,
}, testInfo) => {
  for (const viewport of responsiveViewports) {
    await page.setViewportSize(viewport);
    await page.goto('/eras/');
    await expect(page.locator('.era-timeline')).toBeVisible();
    await waitForStableRendering(page);
    await expectNoPageHorizontalOverflow(page);

    const metrics = await page.evaluate(
      (isMobile: boolean): EraMarkerMetric[] => {
        const parsePixels = (value: string): number => Number.parseFloat(value);
        const timeline = document.querySelector<HTMLElement>('.era-timeline');

        if (timeline === null) {
          throw new Error('Expected an eras timeline.');
        }

        const timelineRect = timeline.getBoundingClientRect();
        const timelineLine = window.getComputedStyle(timeline, '::before');
        const lineX = timelineRect.left + parsePixels(timelineLine.left);

        return Array.from(
          document.querySelectorAll<HTMLElement>('.era-moment'),
        ).map((moment) => {
          const momentRect = moment.getBoundingClientRect();
          const card = moment.querySelector<HTMLElement>('.era-moment__card');

          if (card === null) {
            throw new Error('Expected each era moment to contain a card.');
          }

          const cardRect = card.getBoundingClientRect();
          const marker = window.getComputedStyle(moment, '::before');
          const connector = window.getComputedStyle(moment, '::after');
          const markerX = momentRect.left + parsePixels(marker.left);
          const markerY = momentRect.top + parsePixels(marker.top);
          const connectorY = momentRect.top + parsePixels(connector.top);
          const markerDeltaFromCardCenter = Math.abs(
            markerY - (cardRect.top + cardRect.height / 2),
          );

          return {
            cardStartsAfterMarker: isMobile ? cardRect.left > markerX : true,
            connectorDeltaFromMarker: Math.abs(connectorY - markerY),
            markerDeltaFromCardCenter,
            markerDeltaFromLine: Math.abs(markerX - lineX),
            markerOffsetFromCardTop: markerY - cardRect.top,
            markerWithinCard:
              markerY >= cardRect.top - 1 && markerY <= cardRect.bottom + 1,
          };
        });
      },
      viewport.name === 'mobile',
    );

    expect(metrics.length).toBeGreaterThan(0);

    for (const metric of metrics) {
      expect(metric.markerDeltaFromLine).toBeLessThanOrEqual(1);
      expect(metric.connectorDeltaFromMarker).toBeLessThanOrEqual(1);
      expect(metric.markerWithinCard).toBe(true);
      expect(metric.cardStartsAfterMarker).toBe(true);

      if (viewport.name === 'desktop') {
        expect(metric.markerDeltaFromCardCenter).toBeLessThanOrEqual(1.5);
      } else {
        expect(metric.markerOffsetFromCardTop).toBeGreaterThanOrEqual(16);
        expect(metric.markerOffsetFromCardTop).toBeLessThanOrEqual(48);
      }
    }

    await captureLayoutScreenshot(page, testInfo, `eras-${viewport.name}`);
  }
});

test('representative routes render accessible original visuals without page overflow', async ({
  page,
}) => {
  for (const viewport of responsiveViewports) {
    await page.setViewportSize(viewport);

    for (const route of visualCoverageRoutes) {
      await page.goto(route);
      await waitForStableRendering(page);
      await expectAccessibleOriginalVisual(page);
      await expectNoPageHorizontalOverflow(page);
    }
  }
});

test('representative visual audit pages have relevant labels, captions, and no overflow', async ({
  page,
}, testInfo) => {
  const auditedTechnologies = [
    {
      route: '/technologies/turbocharger/',
      screenshot: 'audit-tech-turbocharger',
      labels: ['Exhaust gas', 'Turbine wheel', 'Compressor wheel'],
    },
    {
      route: '/technologies/diesel-particulate-filter/',
      screenshot: 'audit-tech-dpf',
      labels: ['Soot-laden exhaust', 'Pressure and temperature monitoring'],
    },
    {
      route: '/technologies/on-board-diagnostics/',
      screenshot: 'audit-tech-obd',
      labels: ['Fault-code storage', 'Scan-tool service signal'],
    },
    {
      route: '/technologies/power-inverter/',
      screenshot: 'audit-tech-power-inverter',
      labels: ['Battery DC bus', 'Controlled AC phases'],
    },
    {
      route: '/technologies/anti-lock-braking-system/',
      screenshot: 'audit-tech-abs',
      labels: ['Wheel-speed sensors', 'Brake-pressure modulation'],
    },
    {
      route: '/technologies/electronic-stability-control/',
      screenshot: 'audit-tech-esc',
      labels: ['Yaw-rate comparison', 'Individual brake or torque request'],
    },
    {
      route: '/technologies/controller-area-network/',
      screenshot: 'audit-tech-can',
      labels: ['Framed CAN messages', 'Shared two-wire bus'],
    },
  ] as const;

  for (const viewport of responsiveViewports) {
    await page.setViewportSize(viewport);

    await page.goto('/technologies/');
    await waitForStableRendering(page);
    await expectNoPageHorizontalOverflow(page);
    await expect(
      page.getByRole('navigation', { name: /find a system quickly/i }),
    ).toBeVisible();
    await expect(
      page.getByRole('link', { name: 'Turbocharger', exact: true }),
    ).toBeVisible();
    await captureLayoutScreenshot(
      page,
      testInfo,
      `audit-technologies-index-${viewport.name}`,
    );

    for (const technology of auditedTechnologies) {
      await page.goto(technology.route);
      await waitForStableRendering(page);
      await expectNoPageHorizontalOverflow(page);
      await expectAccessibleOriginalVisual(page);

      const firstFigureText = await page
        .locator('figure')
        .first()
        .textContent();
      const svgDescription = await page
        .locator('figure svg desc')
        .first()
        .textContent();

      expect(firstFigureText).toMatch(/curated for this technology page/i);
      for (const label of technology.labels) {
        expect(svgDescription).toContain(label);
      }

      await captureLayoutScreenshot(
        page,
        testInfo,
        `${technology.screenshot}-${viewport.name}`,
      );
    }
  }

  await page.setViewportSize(responsiveViewports[0]);

  await page.goto('/vehicles/toyota-prius/');
  await waitForStableRendering(page);
  await expectNoPageHorizontalOverflow(page);
  await expect(
    page.getByAltText(/First-generation Toyota Prius photographed/i),
  ).toBeVisible();
  await expect(page.getByRole('link', { name: 'Benespit' })).toBeVisible();
  await expect(page.getByText(/CC BY-SA 4\.0/i)).toBeVisible();
  await captureLayoutScreenshot(page, testInfo, 'audit-vehicle-toyota-prius');

  await page.goto('/controversies/dieselgate/');
  await waitForStableRendering(page);
  await expectNoPageHorizontalOverflow(page);
  await expectAccessibleOriginalVisual(page);
  await expect(
    page.getByRole('heading', { name: 'Volkswagen Dieselgate', exact: true }),
  ).toBeVisible();
  await captureLayoutScreenshot(page, testInfo, 'audit-controversy-dieselgate');
});

test('technology pages render sources and related links', async ({ page }) => {
  await page.goto('/technologies/battery-electric-vehicle/');
  await expect(
    page.getByRole('heading', {
      name: 'Battery Electric Vehicle',
      exact: true,
    }),
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
