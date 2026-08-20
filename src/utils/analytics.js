// Meta Pixel — se activa cuando el ID esté configurado en index.html
export function trackEvent(eventName, params = {}) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, params)
  }
}

export function trackPageView() {
  trackEvent('PageView')
}

export function trackContact(source = 'web') {
  trackEvent('Contact', { source })
}

export function trackLead(evento = 'general') {
  trackEvent('Lead', { content_name: evento })
}
