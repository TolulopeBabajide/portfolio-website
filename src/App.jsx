import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
