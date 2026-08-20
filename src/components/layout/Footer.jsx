import { Link } from 'react-router-dom'
import { SITE } from '../../data/site'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-inner">
        <div className="footer-brand-wrap">
          <div className="footer-brand">
            <span className="brand-icon footer-icon">◈</span>
            <span className="brand-text footer-text">Nexora</span>
          </div>
          <p className="footer-tagline">
            Fotografía & producción audiovisual premium.
          </p>
        </div>

        <div className="footer-links">
          <Link to="/social">Eventos Sociales</Link>
          <Link to="/empresas">Empresas</Link>
          <a href={`https://instagram.com/${SITE.instagram}`} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={`https://facebook.com/${SITE.facebook}`} target="_blank" rel="noreferrer">
            Facebook
          </a>
        </div>

        <p className="footer-legal">
          © {SITE.year} Nexora Multimedia. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
