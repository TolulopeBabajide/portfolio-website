import Hero from './Hero'
import Experience from './Experience'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import SEO from './SEO'
import { useRole } from '../context/RoleContext'

const Home = () => {
    const { config } = useRole()
    return (
        <div className="min-h-screen ">
            <SEO title={config.seoTitle} description={config.seoDescription} url="/" />
            <Hero />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
        </div>
    )
}

export default Home
