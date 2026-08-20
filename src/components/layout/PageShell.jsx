import Navbar from './Navbar'
import Footer from './Footer'
import FloatingWhatsApp from './FloatingWhatsApp'

function PageShell({ children }) {
  return (
    <div className="page-shell">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default PageShell