// Wrapper de ancho máximo — narrow: usa --narrow en vez de --container
function Container({ children, narrow = false, className = '' }) {
  const cls = `${narrow ? 'narrow-container' : 'site-container'} ${className}`.trim()
  return <div className={cls}>{children}</div>
}

export default Container
