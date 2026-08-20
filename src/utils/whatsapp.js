import { SITE } from '../data/site'
import { portfolioData } from '../data/portfolioData'

const PHONE_NUMBER = SITE.phone

// Traduce la ruta actual a un nombre legible: /social/bodas -> "Bodas"
function getSectionLabel(pathname = '') {
  const parts = pathname.split('/').filter(Boolean) // ['social', 'bodas']
  if (parts.length === 0) return null

  const [root, slug] = parts

  if (slug && portfolioData[slug]) {
    return portfolioData[slug].title
  }
  if (root === 'social') return 'Eventos Sociales'
  if (root === 'empresas') return 'Empresas'
  return null
}

export function buildWhatsAppMessage({
  nombre = 'amigo',
  evento = 'mi evento',
  source = 'web directa',
  campaign = '',
  pathname = '',
} = {}) {
  const campaignText = campaign ? ` Campaña: ${campaign}.` : ''
  const sectionLabel = getSectionLabel(pathname)

  // Si estamos en una categoría/sección concreta, el mensaje la menciona
  // directamente (esto es lo que pide el brief: "Vi el portafolio de Bodas...")
  const intentText = sectionLabel
    ? `Vi el portafolio de ${sectionLabel} y quiero cotizar`
    : `me interesa información para ${evento}`

  return `Hola Carlos, soy ${nombre}. ${intentText}. Llegué desde ${source}.${campaignText}`
}

export function buildWhatsAppLink(userData = {}, pathname = '') {
  const message = buildWhatsAppMessage({ ...userData, pathname })
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`
}