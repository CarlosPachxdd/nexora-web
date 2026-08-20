import { buildWhatsAppLink } from '../../utils/whatsapp'
import { useUserContext } from '../../context/UserContext'

function FloatingWhatsApp() {
  const { userData } = useUserContext()

  return (
    <a
      className="floating-wa"
      href={buildWhatsAppLink({
        nombre: userData.nombre,
        evento: userData.evento,
        source: userData.source,
        campaign: userData.campaign,
      })}
      target="_blank"
      rel="noreferrer"
      aria-label="Cotizar por WhatsApp"
    >
      <span className="floating-wa-dot" />
      Cotizar por WhatsApp
    </a>
  )
}

export default FloatingWhatsApp
