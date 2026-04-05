import { describe, expect, it } from 'vitest';

const loadGoogleAnalytics = () => import('../googleAnalytics');

describe('googleAnalytics', () => {
  describe('normalizeMeasurementId', () => {
    it('returns an empty string when the measurement id is undefined', async () => {
      const { normalizeMeasurementId } = await loadGoogleAnalytics();

      expect(normalizeMeasurementId(undefined)).toBe('');
    });

    it('trims surrounding whitespace from the measurement id', async () => {
      const { normalizeMeasurementId } = await loadGoogleAnalytics();

      expect(normalizeMeasurementId(' G-TEST123 ')).toBe('G-TEST123');
    });
  });

  describe('createPageViewScript', () => {
    it('generates an inline script that initializes gtag and tracks Astro page loads', async () => {
      const { createPageViewScript } = await loadGoogleAnalytics();

      const script = createPageViewScript('G-TEST123');

      expect(script).toContain('window.dataLayer = window.dataLayer || [];');
      expect(script).toContain('function gtag(){window.dataLayer.push(arguments);}');
      expect(script).toContain("gtag('js', new Date());");
      expect(script).toContain("gtag('config', 'G-TEST123', { send_page_view: false });");
      expect(script).toContain("page_title: document.title");
      expect(script).toContain("page_location: window.location.href");
      expect(script).toContain("page_path: `${window.location.pathname}${window.location.search}`");
      expect(script).toContain("document.addEventListener('astro:page-load', trackPageView);");
    });

    it('trims surrounding whitespace from the measurement id before generating the script', async () => {
      const { createPageViewScript } = await loadGoogleAnalytics();

      const script = createPageViewScript(' G-TEST123 ');

      expect(script).toContain("gtag('config', 'G-TEST123', { send_page_view: false });");
      expect(script).not.toContain("gtag('config', ' G-TEST123 ', { send_page_view: false });");
    });
  });

  describe('hasMeasurementId', () => {
    it('returns false for undefined', async () => {
      const { hasMeasurementId } = await loadGoogleAnalytics();

      expect(hasMeasurementId(undefined)).toBe(false);
    });

    it('returns false for an empty string', async () => {
      const { hasMeasurementId } = await loadGoogleAnalytics();

      expect(hasMeasurementId('')).toBe(false);
    });

    it('returns false for a whitespace-only string', async () => {
      const { hasMeasurementId } = await loadGoogleAnalytics();

      expect(hasMeasurementId('   \n\t  ')).toBe(false);
    });

    it('returns true for a non-empty measurement id', async () => {
      const { hasMeasurementId } = await loadGoogleAnalytics();

      expect(hasMeasurementId('G-TEST123')).toBe(true);
    });
  });

  describe('getPageViewPayload', () => {
    it('returns the pathname and query string when the URL has search params', async () => {
      const { getPageViewPayload } = await loadGoogleAnalytics();

      expect(getPageViewPayload('https://example.com/posts/astro?tag=analytics&page=2', 'Astro Analytics')).toEqual({
        page_title: 'Astro Analytics',
        page_location: 'https://example.com/posts/astro?tag=analytics&page=2',
        page_path: '/posts/astro?tag=analytics&page=2',
      });
    });

    it('returns only the pathname when the URL has no query string', async () => {
      const { getPageViewPayload } = await loadGoogleAnalytics();

      expect(getPageViewPayload('https://example.com/posts/astro', 'Astro Analytics')).toEqual({
        page_title: 'Astro Analytics',
        page_location: 'https://example.com/posts/astro',
        page_path: '/posts/astro',
      });
    });
  });
});
