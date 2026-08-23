import Hero from './Hero'
import Experience from './Experience'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import SEO from './SEO'
import { useRole } from '../context/RoleContext'
import { useLocation } from 'react-router-dom'

const Home = () => {
    const { config } = useRole()
    const { pathname } = useLocation()
    return (
        <div className="min-h-screen ">
            <SEO title={config.seoTitle} description={config.seoDescription} url={pathname} />
            <Hero />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
        </div>
    )
}

export default Home
