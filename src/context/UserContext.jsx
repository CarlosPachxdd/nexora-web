import { createContext, useContext, useMemo, useState, useEffect } from 'react'
import { getSanitizedParams } from '../utils/params'

const UserContext = createContext(null)

const STORAGE_KEY = 'nexora_user_data'

const DEFAULTS = {
  nombre: 'amigo',
  evento: 'mi evento',
  source: 'web directa',
  campaign: '',
}

// Lee lo que haya quedado guardado de una visita anterior en esta misma pestaña
function readStoredData() {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    return {
      nombre: parsed.nombre || DEFAULTS.nombre,
      evento: parsed.evento || DEFAULTS.evento,
      source: parsed.source || DEFAULTS.source,
      campaign: parsed.campaign || DEFAULTS.campaign,
    }
  } catch {
    return null
  }
}

function persistData(data) {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {
    // sessionStorage puede fallar (modo incógnito estricto, cuota, etc.) — no es crítico
  }
}

export function UserProvider({ children }) {
  // Al iniciar: si ya había datos guardados en esta sesión (p. ej. el usuario
  // navegó de /social a /social/bodas), arrancamos con esos en vez de los defaults
  const [userData, setUserData] = useState(() => readStoredData() || DEFAULTS)

  // Al montar la app, leer los parámetros de la URL y sobreescribir sobre lo guardado.
  // La URL siempre gana: si el bot manda un link nuevo, ese es el dato bueno.
  useEffect(() => {
    const params = getSanitizedParams()
    setUserData((prev) => {
      const next = {
        nombre: params.nombre || prev.nombre,
        evento: params.evento || prev.evento,
        source: params.source || prev.source,
        campaign: params.campaign || prev.campaign,
      }
      persistData(next)
      return next
    })
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
