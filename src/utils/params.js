import {
  sanitizeNombre,
  sanitizeEvento,
  sanitizeSource,
  sanitizeCampaign,
} from './sanitize'

export function getSanitizedParams(search = window.location.search) {
  const params = new URLSearchParams(search)

  return {
    nombre: sanitizeNombre(params.get('nombre')),
    evento: sanitizeEvento(params.get('evento')),
    source: sanitizeSource(params.get('source')),
    campaign: sanitizeCampaign(params.get('campaign')),
  }
}