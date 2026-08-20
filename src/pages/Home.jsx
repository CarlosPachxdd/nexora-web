import { Link } from 'react-router-dom'
import PageShell from '../components/layout/PageShell'
import { useRouteMeta } from '../hooks/useRouteMeta'

import canonLogo from '../assets/tools/canon.png'
import sonyLogo from '../assets/tools/sony.png'
import premiereLogo from '../assets/tools/pr.png'
import afterEffectsLogo from '../assets/tools/af.png'
import photoshopLogo from '../assets/tools/ps.png'
import lightroomLogo from '../assets/tools/lr.png'

function Home() {
  useRouteMeta({
    title: 'Fotografía & Producción Audiovisual',
    description: 'Nexora — Fotografía y producción audiovisual premium para bodas, XV años y empresas en México.',
  })

  const tools = [
    { name: 'Canon', logo: canonLogo },
    { name: 'Sony', logo: sonyLogo },
    { name: 'Premiere Pro', logo: premiereLogo },
    { name: 'After Effects', logo: afterEffectsLogo },
    { name: 'Photoshop', logo: photoshopLogo },
    { name: 'Lightroom', logo: lightroomLogo },
  ]
  return (
    <PageShell>
      <section className="home-hero">
        <div className="site-container hero-grid">
          <div className="hero-copy">
            <span className="section-kicker">Fotografía & Producción Audiovisual</span>
            <h1 className="hero-title">
              Cada
              <br />
              momento
              <br />
              merece ser
              <br />
              <em>eterno</em>
            </h1>
            <p className="hero-description">
              Soy fotógrafo y productor audiovisual. Capturo las historias que te
              definen con la luz, el detalle y la emoción que merecen.
            </p>

            <div className="hero-actions">
              <Link to="/social" className="btn btn-dark">
                Eventos Sociales
              </Link>
              <Link to="/empresas" className="btn btn-light">
                Empresas
              </Link>
            </div>
          </div>

          <div className="hero-media-grid">
            <div className="hero-media hero-media-tall" />
            <div className="hero-media hero-media-top" />
            <div className="hero-media hero-media-bottom" />
          </div>
        </div>
      </section>

      <section className="home-services section-pad">
        <div className="site-container">
          <div className="section-intro">
            <span className="section-kicker">Servicios</span>
            <h2 className="section-title">¿Qué estás buscando?</h2>
          </div>

          <div className="services-grid">
            <Link to="/social" className="service-card service-card-social">
              <div className="service-card-overlay">
                <span className="service-label">Fotografía & Video</span>
                <h3>Eventos Sociales</h3>
                <p>
                  Bodas, XV años y celebraciones únicas, inmortalizadas con arte.
                </p>
                <span className="service-link">Ver categorías →</span>
              </div>
            </Link>

            <Link to="/empresas" className="service-card service-card-business">
              <div className="service-card-overlay">
                <span className="service-label">Producción Corporativa</span>
                <h3>Empresas & Marcas</h3>
                <p>
                  Producto, publicidad y contenido que habla por tu marca.
                </p>
                <span className="service-link">Ver categorías →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="about-dark section-pad">
        <div className="site-container about-grid">
          <div className="about-photo-wrap">
  <div className="about-photo-frame" />
  <div className="about-photo">
    <img
      src="https://res.cloudinary.com/dhb5fo18u/image/upload/f_auto,q_auto,c_fill,g_auto,w_1000,h_1400/publicas-001_uv5lye.jpg"
      alt="Retrato del fotógrafo detrás de Nexora"
    />
  </div>
</div>

          <div className="about-copy">
            <span className="section-kicker section-kicker-dark">Sobre mí</span>
            <h2 className="section-title-dark">
              Hola, soy Carlos
              <br />
              estoy detrás de Nexora
            </h2>
            <p>
              Llevo más de 100 eventos capturando momentos que la gente atesora toda la
              vida. No soy solo un fotógrafo...
              Soy alguien que se mete en tu historia,
              entiende lo que sientes y lo convierte en imágenes que te dejan sin palabras.
            </p>
            <p>
              Trabajo con parejas, familias y empresas que quieren algo más que fotos
              bonitas: quieren recordar cómo se sintieron ese día.
            </p>

            <div className="about-stats">
              <div>
                <strong>100+</strong>
                <span>Eventos.</span>
              </div>
              <div>
                <strong>200+</strong>
                <span>Sesiones</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Recomendado por mis clientes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

   <section className="tools-section section-pad">
  <div className="site-container tools-inner">
    <span className="section-kicker">Equipamiento premium</span>
    <h2 className="section-title center">Herramientas estándar de la industria</h2>

    <div className="tools-row">
  {tools.map((tool) => (
    <div key={tool.name} className="tool-item">
      <img
        src={tool.logo}
        alt={tool.name}
        title={tool.name}
        width="28"
        height="28"
        loading="lazy"
      />
      <span>{tool.name}</span>
    </div>
  ))}
</div>

    <p className="tools-copy">
      Calidad sin concesiones. Captura en alto rango dinámico, ópticas premium
      y una postproducción milimétrica para asegurar que tu historia se vea,
      escuche y sienta como una obra maestra.
    </p>
  </div>
</section>
    </PageShell>
  )
}

export default Home