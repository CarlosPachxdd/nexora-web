import { Link } from 'react-router-dom'
import PageShell from '../components/layout/PageShell'
import { useRouteMeta } from '../hooks/useRouteMeta'

function Social() {
  useRouteMeta({
    title: 'Eventos Sociales',
    description: 'Fotografía y video para bodas, XV años y celebraciones únicas en México.',
  })

  return (
    <PageShell>
      <section className="listing-page section-pad">
        <div className="site-container narrow-container">
          <div className="breadcrumb-row">
            <Link to="/" className="back-button">
              ← Volver
            </Link>
            <div className="breadcrumbs">
              <span>Inicio</span>
              <span>›</span>
              <span>Sociales</span>
            </div>
          </div>

          <div className="listing-hero">
            <h1>
              Eventos
              <br />
              <em>Sociales</em>
            </h1>
            <p>
              Elige la categoría que mejor describe tu celebración y descubre nuestro trabajo.
            </p>
          </div>

          <div className="listing-divider" />

          <div className="portfolio-grid three-cols">
            <article className="portfolio-card portfolio-wedding">
              <div className="portfolio-overlay">
                <span>Fotografía & Video</span>
                <h3>Bodas</h3>
                <Link to="/social/bodas">Ver portafolio →</Link>
              </div>
            </article>

            <article className="portfolio-card portfolio-xv">
              <div className="portfolio-overlay">
                <span>Fotografía & Video</span>
                <h3>XV Años</h3>
                <Link to="/social/xv">Ver portafolio →</Link>
              </div>
            </article>

            <article className="portfolio-card portfolio-others">
              <div className="portfolio-overlay">
                <span>Fotografía & Video</span>
                <h3>Otros eventos</h3>
                <Link to="/social/otros-eventos">Ver portafolio →</Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

export default Social