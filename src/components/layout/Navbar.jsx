import { Link } from 'react-router-dom'
import { buildWhatsAppLink } from '../../utils/whatsapp'
import { useUserContext } from '../../context/UserContext'
import logoImg from '../../assets/logo.png'


function Navbar() {
  const { userData } = useUserContext()

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
            href={buildWhatsAppLink({
              nombre: userData.nombre,
              evento: userData.evento,
              source: userData.source,
              campaign: userData.campaign,
            })}
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
