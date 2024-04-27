import'./App.css'
import NavBar from './components/NavBar'
import { UserProvider } from './context/userContext'
import AppRoutes from './routes/AppRoutes'

function App() {
  return(
    <UserProvider>
      <NavBar />
      <AppRoutes />
    </UserProvider>
  )
}

export default App