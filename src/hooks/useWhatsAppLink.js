import { useLocation } from 'react-router-dom'
import { useUserContext } from '../context/UserContext'
import { buildWhatsAppLink } from '../utils/whatsapp'

// Hook conveniente para usar el link de WhatsApp en cualquier componente.
// Combina los datos del usuario (nombre, evento, source, campaign) con la
// ruta actual, para que el mensaje mencione la sección/portafolio que se ve.
export function useWhatsAppLink() {
  const { userData } = useUserContext()
  const { pathname } = useLocation()
  return buildWhatsAppLink(userData, pathname)
}
