import { UserProvider } from '../context/UserContext'

function Providers({ children }) {
  return <UserProvider>{children}</UserProvider>
}

export default Providers