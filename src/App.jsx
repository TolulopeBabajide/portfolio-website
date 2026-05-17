import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './components/Home'
import AwadeProject from './pages/AwadeProject'
import PlanacleProject from './pages/PlanacleProject'
import BookOrbitProject from './pages/BookOrbitProject'
import CyberProject from './pages/CyberProject'
import AgenticTeamProject from './pages/AgenticTeamProject'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/awade" element={<AwadeProject />} />
        <Route path="/projects/planacle" element={<PlanacleProject />} />
        <Route path="/projects/bookorbit" element={<BookOrbitProject />} />
        <Route path="/projects/cybersecurity" element={<CyberProject />} />
        <Route path="/projects/agentic-team" element={<AgenticTeamProject />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
