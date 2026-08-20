// Actualiza el <title> y meta description dinámicamente por página
export function setPageMeta({ title, description, image } = {}) {
  const siteName = 'Nexora Multimedia'
  const defaultDesc = 'Fotografía y producción audiovisual premium para eventos sociales y empresas.'
  const defaultImage = 'https://res.cloudinary.com/dhb5fo18u/image/upload/f_auto,q_auto,w_1200/og-cover.jpg'

  const fullTitle = title ? `${title} | ${siteName}` : siteName
  const metaDesc = description || defaultDesc
  const metaImage = image || defaultImage

  // Title
  document.title = fullTitle

  // Meta description
  setMeta('name', 'description', metaDesc)

  // OG
  setMeta('property', 'og:title', fullTitle)
  setMeta('property', 'og:description', metaDesc)
  setMeta('property', 'og:image', metaImage)
  setMeta('property', 'og:type', 'website')

  // Twitter
  setMeta('name', 'twitter:card', 'summary_large_image')
  setMeta('name', 'twitter:title', fullTitle)
  setMeta('name', 'twitter:description', metaDesc)
  setMeta('name', 'twitter:image', metaImage)
}

function setMeta(attr, name, content) {
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}
