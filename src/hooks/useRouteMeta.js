import { useEffect } from 'react'
import { setPageMeta } from '../utils/seo'
import { trackPageView } from '../utils/analytics'

// Actualiza el title/meta y dispara PageView al cambiar de ruta
export function useRouteMeta({ title, description, image } = {}) {
  useEffect(() => {
    setPageMeta({ title, description, image })
    trackPageView()
  }, [title, description, image])
}

