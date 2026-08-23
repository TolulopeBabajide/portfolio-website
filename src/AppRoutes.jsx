import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './components/Home'
import AwadeProject from './pages/AwadeProject'
import PlanacleProject from './pages/PlanacleProject'
import BookOrbitProject from './pages/BookOrbitProject'
import CyberProject from './pages/CyberProject'
import AgenticTeamProject from './pages/AgenticTeamProject'
import OpsaraProject from './pages/OpsaraProject'
import AwadeSecurityProject from './pages/AwadeSecurityProject'
import PlanacleSecurityProject from './pages/PlanacleSecurityProject'

const ScrollToTop = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView()
      })
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Role-tailored entry points, prerendered with role-correct meta. */}
        <Route path="/engineering" element={<Home />} />
        <Route path="/security" element={<Home />} />
        <Route path="/customer" element={<Home />} />
        <Route path="/general" element={<Home />} />
        <Route path="/projects/awade" element={<AwadeProject />} />
        <Route path="/projects/planacle" element={<PlanacleProject />} />
        <Route path="/projects/bookorbit" element={<BookOrbitProject />} />
        <Route path="/projects/cybersecurity" element={<CyberProject />} />
        <Route path="/projects/agentic-team" element={<AgenticTeamProject />} />
        <Route path="/projects/opsara" element={<OpsaraProject />} />
        <Route path="/projects/awade-security" element={<AwadeSecurityProject />} />
        <Route path="/projects/planacle-security" element={<PlanacleSecurityProject />} />
      </Routes>
    </>
  )
}

export default AppRoutes
