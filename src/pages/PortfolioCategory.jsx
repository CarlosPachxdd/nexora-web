import { useEffect, useMemo, useState, useCallback, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import PageShell from '../components/layout/PageShell'
import { portfolioData } from '../data/portfolioData'
import { useWhatsAppLink } from '../hooks/useWhatsAppLink'
import { useRouteMeta } from '../hooks/useRouteMeta'

function HeroCarousel({ images, title }) {
  const [current, setCurrent] = useState(0)

  const prev = useCallback(() =>
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1)), [images.length])

  const next = useCallback(() =>
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1)), [images.length])

  useEffect(() => { setCurrent(0) }, [images])

  useEffect(() => {
    let startX = 0
    const el = document.getElementById('hero-carousel')
    if (!el) return
    const onStart = (e) => { startX = e.touches?.[0]?.clientX ?? e.clientX }
    const onEnd = (e) => {
      const endX = e.changedTouches?.[0]?.clientX ?? e.clientX
      if (startX - endX > 50) next()
      if (endX - startX > 50) prev()
    }
    el.addEventListener('touchstart', onStart)
    el.addEventListener('touchend', onEnd)
    return () => {
      el.removeEventListener('touchstart', onStart)
      el.removeEventListener('touchend', onEnd)
    }
  }, [next, prev])

  return (
    <div className="hero-carousel" id="hero-carousel">
      <div
        className="hero-carousel-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, i) => (
          <div
            key={img}
            className="hero-carousel-slide"
            style={{ '--slide-bg': `url(${img})` }}
          >
            <img
              src={img}
              alt={`${title} ${i + 1}`}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            className="carousel-btn carousel-btn-prev"
            onClick={prev}
            aria-label="Foto anterior"
          >
            ‹
          </button>
          <button
            type="button"
            className="carousel-btn carousel-btn-next"
            onClick={next}
            aria-label="Foto siguiente"
          >
            ›
          </button>
          <div className="carousel-dots">
            {images.map((_, i) => (
              <button
                key={`dot-${i}`}
                type="button"
                className={`carousel-dot ${i === current ? 'is-active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Ver foto ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function HeroVideo({ src, poster }) {
  const videoRef = useRef(null)
  const [isMuted, setIsMuted] = useState(true)

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setIsMuted(video.muted)
  }

  return (
    <div className="hero-video">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />
      <button
        type="button"
        className="hero-video-mute-btn"
        onClick={toggleMute}
        aria-label={isMuted ? 'Activar sonido' : 'Silenciar video'}
      >
        {isMuted ? '🔇' : '🔊'}
      </button>
    </div>
  )
}

function PortfolioCategory() {
  const { slug } = useParams()
  const whatsappLink = useWhatsAppLink()
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [showFullGallery, setShowFullGallery] = useState(false)

  const item = useMemo(() => portfolioData[slug], [slug])

  useEffect(() => {
    setActiveTestimonial(0)
    setShowFullGallery(false)
  }, [slug])

  if (!item) {
    return (
      <PageShell>
        <main className="listing-page section-pad">
          <div className="site-container">
            <div className="listing-hero">
              <span className="section-kicker">Portafolio</span>
              <h1>Portafolio no encontrado</h1>
              <p>La categoría que buscas no existe o todavía no fue configurada.</p>
            </div>
            <Link to="/" className="btn btn-dark">
              Volver al inicio
            </Link>
          </div>
        </main>
      </PageShell>
    )
  }

  useRouteMeta({
    title: item.title,
    description: item.intro,
    image: item.gallery?.[0],
  })

  const parentLabel = item.parent === 'social' ? 'Sociales' : 'Empresas'
  const parentRoute = item.parent === 'social' ? '/social' : '/empresas'
  const testimonial = item.testimonials?.[activeTestimonial]
  const heroGallery = item.gallery?.slice(0, 5) || []
  const rawFullGallery = item.fullGallery?.length ? item.fullGallery : item.gallery || []
  // Si hay video de highlights, la galería completa puede mostrar todo sin
  // problema (el video ya no repite ninguna foto). Si NO hay video todavía
  // (sigue el carrusel de fotos), quitamos de la galería completa las fotos
  // que ya se ven arriba, para no repetirlas dos veces.
  const fullGallery = item.highlightVideo
    ? rawFullGallery
    : rawFullGallery.filter((image) => !heroGallery.includes(image))

  return (
    <PageShell>
      <main className="portfolio-detail section-pad">
        <div className="site-container">
          <div className="breadcrumb-row">
            <Link to={parentRoute} className="back-button">
              ← Volver
            </Link>
            <div className="breadcrumbs">
              <Link to="/">Inicio</Link>
              <span>›</span>
              <Link to={parentRoute}>{parentLabel}</Link>
              <span>›</span>
              <span>{item.title}</span>
            </div>
          </div>

          <section className="detail-hero">
            <div className="detail-copy">
              <span className="section-kicker">{item.eyebrow}</span>
              <h1 className="section-title">{item.title}</h1>
              <p className="detail-intro">{item.intro}</p>
              <p className="detail-description">{item.description}</p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
              >
                {item.whatsappLabel || 'Cotizar por WhatsApp'}
              </a>
            </div>

            {item.highlightVideo ? (
              <HeroVideo src={item.highlightVideo} poster={heroGallery[0]} />
            ) : (
              <HeroCarousel images={heroGallery} title={item.title} />
            )}
          </section>

          {fullGallery.length > 0 && (
            <>
              <div className="detail-divider" />
              <section className="detail-block full-gallery-block">
                <div className="detail-block-heading gallery-toggle-row">
                  <div>
                    <span className="section-kicker">Galería</span>
                    <h2 className="section-title small-title">Momentos completos</h2>
                  </div>
                  <button
                    type="button"
                    className="btn btn-light gallery-toggle-btn"
                    onClick={() => setShowFullGallery((prev) => !prev)}
                    aria-expanded={showFullGallery}
                  >
                    {showFullGallery ? 'Ocultar galería' : 'Ver galería completa'}
                  </button>
                </div>
                {showFullGallery && (
                  <div className="full-gallery-grid">
                    {fullGallery.map((image, index) => (
                      <div key={`${image}-${index}`} className="full-gallery-card">
                        <img
                          src={image}
                          alt={`${item.title} ${index + 1}`}
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </section>
            </>
          )}

          <div className="detail-divider" />

          <section className="detail-block">
            <div className="detail-block-heading">
              <span className="section-kicker">Incluye</span>
              <h2 className="section-title small-title">Qué puedes esperar</h2>
            </div>
            <div className="deliverables-grid">
              {item.deliverables?.map((deliverable) => (
                <article key={deliverable} className="deliverable-card">
                  <span className="deliverable-dot" />
                  <p>{deliverable}</p>
                </article>
              ))}
            </div>
          </section>

          {testimonial && (
            <>
              <div className="detail-divider" />
              <section className="detail-block">
                <div className="detail-block-heading">
                  <span className="section-kicker">Testimonios</span>
                  <h2 className="section-title small-title">Lo que dicen nuestros clientes</h2>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-person">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="testimonial-avatar"
                    />
                    <div>
                      <strong>{testimonial.name}</strong>
                      <span>Cliente Nexora</span>
                    </div>
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-controls">
                    {item.testimonials.map((_, index) => (
                      <button
                        key={`testimonial-${index}`}
                        type="button"
                        className={`testimonial-dot ${index === activeTestimonial ? 'is-active' : ''}`}
                        onClick={() => setActiveTestimonial(index)}
                        aria-label={`Ver testimonio ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </section>
            </>
          )}

          {item.faqs?.length > 0 && (
            <>
              <div className="detail-divider" />
              <section className="detail-block">
                <div className="detail-block-heading">
                  <span className="section-kicker">FAQ</span>
                  <h2 className="section-title small-title">Preguntas frecuentes</h2>
                </div>
                <div className="faq-list">
                  {item.faqs.map((faq) => (
                    <details key={faq.q} className="faq-item">
                      <summary>{faq.q}</summary>
                      <p>{faq.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            </>
          )}

          <div className="detail-divider" />

          <section className="detail-cta">
            <span className="section-kicker">Contacto</span>
            <h2 className="section-title small-title">
              Si esto se parece a lo que necesitas, lo armamos contigo.
            </h2>
            <p>
              Cuéntame tu idea por WhatsApp y te propongo una ruta visual clara para tu proyecto.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              Ir a WhatsApp
            </a>
          </section>
        </div>
      </main>
    </PageShell>
  )
}

export default PortfolioCategory
