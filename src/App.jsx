import { BrowserRouter } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import AppRoutes from './AppRoutes'
import { ThemeProvider } from './context/ThemeContext'
import { RoleProvider } from './context/RoleContext'
import Navbar from './components/Navbar'

function App() {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <BrowserRouter>
          <RoleProvider>
            <Navbar />
            <AppRoutes />
          </RoleProvider>
        </BrowserRouter>
      </MotionConfig>
    </ThemeProvider>
  )
}

export default App
