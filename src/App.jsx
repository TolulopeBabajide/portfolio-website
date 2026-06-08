import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import { ThemeProvider } from './context/ThemeContext'
import { RoleProvider } from './context/RoleContext'
import Navbar from './components/Navbar'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <RoleProvider>
          <Navbar />
          <AppRoutes />
        </RoleProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
