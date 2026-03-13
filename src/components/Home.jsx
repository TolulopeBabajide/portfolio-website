import Hero from './Hero'
import Experience from './Experience'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import SEO from './SEO'

const Home = () => {
    const homeSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Tolulope Babajide",
        "jobTitle": "AI Systems Engineer",
        "url": "https://tolulopebabajide.com",
        "sameAs": [
            "https://github.com/TolulopeBabajide",
            "https://linkedin.com/in/tolulopebabajide"
        ],
        "description": "AI Systems Engineer and Backend Architect specializing in distributed systems and AI applications."
    };

    return (
        <div className="min-h-screen ">
            <SEO
                title="Tolulope Babajide | AI Systems Engineer & Backend Architect"
                description="Portfolio of Tolulope Babajide, an AI Systems Engineer specializing in backend architecture, AI application development, and distributed systems."
                schema={homeSchema}
            />
            <Hero />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
        </div>
    )
}

export default Home
