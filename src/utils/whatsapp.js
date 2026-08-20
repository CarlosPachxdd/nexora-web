import { SITE } from '../data/site'

const PHONE_NUMBER = SITE.phone

export function buildWhatsAppMessage({
  nombre = 'amigo',
  evento = 'mi evento',
  source = 'web directa',
  campaign = '',
} = {}) {
  const campaignText = campaign ? ` Campaña: ${campaign}.` : ''

  return `Hola Carlos, soy ${nombre}. Vi el sitio de Nexora y me interesa información para ${evento}. Llegué desde ${source}.${campaignText}`
}

export function buildWhatsAppLink(userData = {}) {
  const message = buildWhatsAppMessage(userData)
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`
}