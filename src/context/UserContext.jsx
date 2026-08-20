import { createContext, useContext, useMemo, useState, useEffect } from 'react'
import { getSanitizedParams } from '../utils/params'

const UserContext = createContext(null)

export function UserProvider({ children }) {
  const [userData, setUserData] = useState({
    nombre: 'amigo',
    evento: 'mi evento',
    source: 'web directa',
    campaign: '',
  })

  // Al montar la app, leer los UTMs de la URL y meterlos al contexto
  useEffect(() => {
    const params = getSanitizedParams()
    // Solo sobreescribir si vienen datos reales en la URL
    setUserData((prev) => ({
      nombre: params.nombre || prev.nombre,
      evento: params.evento || prev.evento,
      source: params.source || prev.source,
      campaign: params.campaign || prev.campaign,
    }))
  }, [])

  const value = useMemo(() => ({ userData, setUserData }), [userData])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export function useUserContext() {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider')
  }
  return context
}
