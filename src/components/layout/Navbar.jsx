import { Link } from 'react-router-dom'
import { useWhatsAppLink } from '../../hooks/useWhatsAppLink'
import logoImg from '../../assets/logo.png'


function Navbar() {
  const whatsappLink = useWhatsAppLink()

  return (
    <header className="site-header">
      <div className="site-container navbar">
        <Link to="/" className="brand-mark" aria-label="Ir al inicio">
          <img src={logoImg} alt="Nexora" className="brand-logo" />
          <span className="brand-text">Nexora Multimedia</span>
        </Link>

        <nav className="nav-links">
          <Link to="/">Inicio</Link>
          <Link to="/social">Sociales</Link>
          <Link to="/empresas">Empresas</Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="nav-cta"
          >
            Cotizar
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
