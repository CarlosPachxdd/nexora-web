// Botón reutilizable — variant: 'dark' | 'light'
function Button({ children, variant = 'dark', href, onClick, className = '', ...props }) {
  const cls = `btn btn-${variant} ${className}`.trim()

  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={cls} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default Button
