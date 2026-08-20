import { Link } from 'react-router-dom'
import PageShell from '../components/layout/PageShell'
import { useRouteMeta } from '../hooks/useRouteMeta'

function NotFound() {
  useRouteMeta({ title: 'Página no encontrada' })

  return (
    <PageShell>
      <section className="listing-page section-pad">
        <div className="site-container narrow-container">
          <div className="listing-hero">
            <span className="section-kicker">404</span>
            <h1>Esta página no existe</h1>
            <p>Es posible que el enlace esté roto o que la página haya sido movida.</p>
          </div>
          <Link to="/" className="btn btn-dark">
            Volver al inicio
          </Link>
        </div>
      </section>
    </PageShell>
  )
}

export default NotFound
