// Eventos permitidos — deben coincidir con los slugs de portfolioData
const ALLOWED_EVENTS = [
  'bodas',
  'xv',
  'otros-eventos',
  'producto',
  'publicidad',
  'redes-sociales',
  'eventos-corporativos',
  'reels',
  'branding',
]

export function sanitizeText(value = '') {
  return String(value)
    .replace(/<[^>]*>?/gm, '')
    .replace(/[^\p{L}\p{N}\s._-]/gu, '')
    .trim()
}

export function sanitizeNombre(value) {
  const cleaned = sanitizeText(value).slice(0, 30)
  return cleaned || ''
}

export function sanitizeEvento(value) {
  const cleaned = sanitizeText(value).toLowerCase().trim()
  return ALLOWED_EVENTS.includes(cleaned) ? cleaned : ''
}

export function sanitizeSource(value) {
  const cleaned = sanitizeText(value).slice(0, 40)
  return cleaned || ''
}

export function sanitizeCampaign(value) {
  return sanitizeText(value).slice(0, 60)
}

export { ALLOWED_EVENTS }