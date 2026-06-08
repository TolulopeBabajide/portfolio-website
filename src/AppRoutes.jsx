import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './components/Home'
import AwadeProject from './pages/AwadeProject'
import PlanacleProject from './pages/PlanacleProject'
import BookOrbitProject from './pages/BookOrbitProject'
import CyberProject from './pages/CyberProject'
import AgenticTeamProject from './pages/AgenticTeamProject'
import OpsaraProject from './pages/OpsaraProject'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/awade" element={<AwadeProject />} />
        <Route path="/projects/planacle" element={<PlanacleProject />} />
        <Route path="/projects/bookorbit" element={<BookOrbitProject />} />
        <Route path="/projects/cybersecurity" element={<CyberProject />} />
        <Route path="/projects/agentic-team" element={<AgenticTeamProject />} />
        <Route path="/projects/opsara" element={<OpsaraProject />} />
      </Routes>
    </>
  )
}

export default AppRoutes
