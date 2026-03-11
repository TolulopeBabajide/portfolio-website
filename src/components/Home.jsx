import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Experience from './Experience'
import Skills from './Skills'
import Contact from './Contact'

const Home = () => {
    return (
        <main id="main-content" className="min-h-screen">
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Skills />
            <Contact />
        </main>
    )
}

export default Home
