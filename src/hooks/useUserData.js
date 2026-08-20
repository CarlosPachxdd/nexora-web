import { useUserContext } from '../context/UserContext'

// Hook conveniente para leer userData desde cualquier componente
export function useUserData() {
  const { userData, setUserData } = useUserContext()
  return { userData, setUserData }
}
