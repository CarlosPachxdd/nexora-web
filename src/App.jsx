import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Social from './pages/Social'
import Empresas from './pages/Empresas'
import PortfolioCategory from './pages/PortfolioCategory'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/social" element={<Social />} />
      <Route path="/empresas" element={<Empresas />} />
      <Route path="/social/:slug" element={<PortfolioCategory />} />
      <Route path="/empresas/:slug" element={<PortfolioCategory />} />
    </Routes>
  )
}

export default App