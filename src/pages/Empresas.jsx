import { Link } from 'react-router-dom'
import PageShell from '../components/layout/PageShell'
import { useRouteMeta } from '../hooks/useRouteMeta'

function Empresas() {
  useRouteMeta({
    title: 'Producción Corporativa',
    description: 'Imagen de producto, publicidad y contenido para redes que posiciona tu marca.',
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
              <span>Empresas</span>
            </div>
          </div>

          <div className="listing-hero">
            <h1>
              Producción
              <br />
              <em>Corporativa</em>
            </h1>
            <p>
              Explora nuestras especialidades y encuentra el servicio ideal para tu marca.
            </p>
          </div>

          <div className="listing-divider" />

          <div className="portfolio-grid three-cols">
            <article className="portfolio-card portfolio-product">
              <div className="portfolio-overlay">
                <span>Fotografía</span>
                <h3>Imagen de producto</h3>
                <Link to="/empresas/producto">Ver portafolio →</Link>
              </div>
            </article>

            <article className="portfolio-card portfolio-ads">
              <div className="portfolio-overlay">
                <span>Producción</span>
                <h3>Publicidad</h3>
                <Link to="/empresas/publicidad">Ver portafolio →</Link>
              </div>
            </article>

            <article className="portfolio-card portfolio-social-media">
              <div className="portfolio-overlay">
                <span>Contenido</span>
                <h3>Redes Sociales</h3>
                <Link to="/empresas/redes-sociales">Ver portafolio →</Link>
              </div>
            </article>

            <article className="portfolio-card portfolio-events">
              <div className="portfolio-overlay">
                <span>Cobertura</span>
                <h3>Eventos corporativos</h3>
                <Link to="/empresas/eventos-corporativos">Ver portafolio →</Link>
              </div>
            </article>

            <article className="portfolio-card portfolio-reels">
              <div className="portfolio-overlay">
                <span>Producción</span>
                <h3>Video / Reels</h3>
                <Link to="/empresas/reels">Ver portafolio →</Link>
              </div>
            </article>

            <article className="portfolio-card portfolio-branding">
              <div className="portfolio-overlay">
                <span>Identidad visual</span>
                <h3>Branding</h3>
                <Link to="/empresas/branding">Ver portafolio →</Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

export default Empresas