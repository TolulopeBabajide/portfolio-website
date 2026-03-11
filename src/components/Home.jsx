import Hero from './Hero'
import Experience from './Experience'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

const Home = () => {
    return (
        <div className="min-h-screen ">
            <Hero />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
        </div>
    )
}

export default Home
