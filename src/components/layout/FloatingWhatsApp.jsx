import { useWhatsAppLink } from '../../hooks/useWhatsAppLink'

function FloatingWhatsApp() {
  const whatsappLink = useWhatsAppLink()

  return (
    <a
      className="floating-wa"
      href={whatsappLink}
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
