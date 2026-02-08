import Hero from './Hero'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

const Home = () => {
    return (
        <div className="min-h-screen">
            <Hero />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

export default Home
