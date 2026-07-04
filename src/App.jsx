import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import ClickSpark from './components/ClickSpark'
import Particles from './components/Particles'
import Contact from './components/Contact'
import About from './components/About'

function App() {
  return (
    <ClickSpark
      sparkColor="#ffff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div style={{ position: 'relative', background: '#080C18', minHeight: '100vh' }}>

        {/* Particles background */}
        <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
          <Particles
            particleColors={["#ffffff"]}
            particleCount={150}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={80}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
          />
        </div>

        {/* All content */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </div>

      </div>
    </ClickSpark>
  )
}

export default App