import Navbar         from './components/Navbar'
import Hero           from './components/Hero'
import About          from './components/About'
import Skills         from './components/Skills'
import Projects       from './components/Projects'
import Education      from './components/Education'
import DSA            from './components/DSA'
import Contact        from './components/Contact'
import Footer         from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import BackToTop      from './components/BackToTop'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const glow = document.querySelector('.cursor-glow')
    const move = (e) => {
      if (glow) {
        glow.style.left = e.clientX + 'px'
        glow.style.top = e.clientY + 'px'
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div style={{ background: '#0F172A', minHeight: '100vh' }}>
      <div className="cursor-glow" />

      <AnimatePresence>
        {loading && (
          <motion.div
            className="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="loading-logo">SS</div>
            <div className="loading-spinner" />
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <DSA />
            <Contact />
          </main>
          <Footer />
          <BackToTop />
        </>
      )}
    </div>
  )
}
