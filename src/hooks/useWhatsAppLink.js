import { useUserContext } from '../context/UserContext'
import { buildWhatsAppLink } from '../utils/whatsapp'

// Hook conveniente para usar el link de WhatsApp en cualquier componente
export function useWhatsAppLink(label = '') {
  const { userData } = useUserContext()
  return buildWhatsAppLink({
    nombre: userData.nombre,
    evento: userData.evento,
    source: userData.source,
    campaign: userData.campaign,
    label,
  })
}
