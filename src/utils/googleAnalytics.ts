export function normalizeMeasurementId(measurementId?: string): string {
  return measurementId?.trim() ?? '';
}

export function hasMeasurementId(measurementId?: string): measurementId is string {
  return Boolean(normalizeMeasurementId(measurementId));
}

export function createPageViewScript(measurementId: string): string {
  const escapedMeasurementId = normalizeMeasurementId(measurementId).replaceAll('\\', '\\\\').replaceAll("'", "\\'");

  return `window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
function trackPageView() {
  gtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: \`${'${window.location.pathname}'}${'${window.location.search}'}\`,
  });
}
gtag('js', new Date());
gtag('config', '${escapedMeasurementId}', { send_page_view: false });
document.addEventListener('astro:page-load', trackPageView);`;
}

export function getPageViewPayload(href: string, title: string) {
  const { pathname, search } = new URL(href);

  return {
    page_title: title,
    page_location: href,
    page_path: `${pathname}${search}`,
  };
}
