// Sección con padding estándar
function Section({ children, className = '', dark = false, ...props }) {
  const cls = `section-pad ${dark ? 'section-dark' : ''} ${className}`.trim()
  return (
    <section className={cls} {...props}>
      {children}
    </section>
  )
}

export default Section
