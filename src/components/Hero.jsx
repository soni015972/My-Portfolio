import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiMail, FiCode, FiCpu, FiStar } from 'react-icons/fi'

const ROLES = ['MERN Stack Developer', 'Java DSA Enthusiast', 'Problem Solver', 'Full Stack Learner']

// SVG developer illustration (no external image needed)
const HeroIllustration = () => (
  <svg viewBox="0 0 400 380" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 440 }}>
    <rect x="60" y="40" width="280" height="190" rx="16" fill="#1E293B" stroke="#0D6EFD" strokeWidth="2"/>
    <rect x="75" y="55" width="250" height="155" rx="8" fill="#0F172A"/>
    <rect x="90" y="72" width="60" height="8" rx="4" fill="#0D6EFD" opacity="0.9"/>
    <rect x="158" y="72" width="40" height="8" rx="4" fill="#38BDF8" opacity="0.7"/>
    <rect x="90" y="92" width="30" height="7" rx="3" fill="#818CF8" opacity="0.8"/>
    <rect x="128" y="92" width="80" height="7" rx="3" fill="#38BDF8" opacity="0.5"/>
    <rect x="90" y="110" width="50" height="7" rx="3" fill="#0D6EFD" opacity="0.6"/>
    <rect x="148" y="110" width="60" height="7" rx="3" fill="#10B981" opacity="0.7"/>
    <rect x="90" y="128" width="20" height="7" rx="3" fill="#818CF8" opacity="0.8"/>
    <rect x="118" y="128" width="100" height="7" rx="3" fill="#38BDF8" opacity="0.4"/>
    <rect x="90" y="146" width="70" height="7" rx="3" fill="#0D6EFD" opacity="0.7"/>
    <rect x="90" y="164" width="40" height="7" rx="3" fill="#10B981" opacity="0.6"/>
    <rect x="138" y="164" width="55" height="7" rx="3" fill="#818CF8" opacity="0.5"/>
    <rect x="90" y="182" width="90" height="7" rx="3" fill="#38BDF8" opacity="0.6"/>
    <rect x="178" y="230" width="44" height="30" rx="4" fill="#1E293B" stroke="#0D6EFD" strokeWidth="1.5"/>
    <rect x="148" y="258" width="104" height="12" rx="6" fill="#1E293B" stroke="#0D6EFD" strokeWidth="1.5"/>
    <rect x="100" y="295" width="200" height="50" rx="10" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.5"/>
    {[0,1,2,3,4,5,6,7,8,9].map(i => (
      <rect key={`top-${i}`} x={112 + i*17} y="305" width="12" height="10" rx="3" fill="#0F172A" stroke="#0D6EFD" strokeWidth="1" opacity="0.8"/>
    ))}
    {[0,1,2,3,4,5,6,7,8].map(i => (
      <rect key={`mid-${i}`} x={116 + i*17} y="322" width="12" height="10" rx="3" fill="#0F172A" stroke="#0D6EFD" strokeWidth="1" opacity="0.8"/>
    ))}
    <rect x="148" y="336" width="104" height="6" rx="3" fill="#0F172A" stroke="#0D6EFD" strokeWidth="1" opacity="0.8"/>
    <circle cx="340" cy="90" r="22" fill="rgba(13,110,253,0.15)" stroke="#0D6EFD" strokeWidth="1.5"/>
    <circle cx="340" cy="90" r="6" fill="#38BDF8"/>
    <ellipse cx="340" cy="90" rx="20" ry="7" stroke="#38BDF8" strokeWidth="1.5" fill="none"/>
    <ellipse cx="340" cy="90" rx="20" ry="7" stroke="#38BDF8" strokeWidth="1.5" fill="none" transform="rotate(60 340 90)"/>
    <ellipse cx="340" cy="90" rx="20" ry="7" stroke="#38BDF8" strokeWidth="1.5" fill="none" transform="rotate(120 340 90)"/>
    <rect x="20" y="150" width="44" height="44" rx="10" fill="rgba(247,223,30,0.15)" stroke="#F7DF1E" strokeWidth="1.5"/>
    <text x="28" y="178" fontFamily="monospace" fontSize="16" fontWeight="bold" fill="#F7DF1E">JS</text>
    <ellipse cx="355" cy="240" rx="22" ry="9" fill="rgba(16,185,129,0.15)" stroke="#10B981" strokeWidth="1.5"/>
    <rect x="333" y="240" width="44" height="18" fill="rgba(16,185,129,0.1)" stroke="#10B981" strokeWidth="1.5"/>
    <ellipse cx="355" cy="258" rx="22" ry="9" fill="rgba(16,185,129,0.15)" stroke="#10B981" strokeWidth="1.5"/>
    <circle cx="200" cy="140" r="120" fill="url(#glowGrad)" opacity="0.15"/>
    <defs>
      <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#0D6EFD"/>
        <stop offset="100%" stopColor="transparent"/>
      </radialGradient>
    </defs>
  </svg>
)

// Typewriter hook: cycles through role strings
function useTypewriter(words, typeSpeed = 80, deleteSpeed = 40, pauseMs = 1600) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    let timeout

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pauseMs)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
    } else {
      const speed = isDeleting ? deleteSpeed : typeSpeed
      const next = isDeleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)
      timeout = setTimeout(() => setText(next), speed)
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseMs])

  return text
}

// Floating particle dots on canvas background
function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      o: Math.random() * 0.5 + 0.2,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.dx; p.y += p.dy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(56,189,248,${p.o})`
        ctx.fill()
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
    />
  )
}

export default function Hero() {
  const typedText = useTypewriter(ROLES)

  return (
    <section id="home" className="hero-section">
      <ParticleCanvas />

      <div className="container hero-content">
        <div className="row align-items-center g-5">

          {/* Left: text */}
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <p className="hero-greeting">👋 Hello, World!</p>
              <h1 className="hero-name">Shubham Soni</h1>

              <div className="hero-typewriter">
                {typedText}<span className="typewriter-cursor" />
              </div>

              <p className="hero-description">
                I build responsive full-stack web applications and continuously improve my
                problem-solving skills through{' '}
                <span style={{ color: 'var(--blue-light)', fontWeight: 600 }}>
                  Data Structures &amp; Algorithms
                </span>.
              </p>

              <div className="hero-buttons">
                <motion.a href="/resume.pdf" download className="btn-primary-custom" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <FiDownload /> Download Resume
                </motion.a>
                <motion.a href="#contact" className="btn-outline-custom" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <FiMail /> Contact Me
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right: illustration */}
          <div className="col-lg-6">
            <motion.div
              className="hero-illustration"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="hero-img-wrapper">
                <HeroIllustration />
              </div>
              <div className="floating-badge floating-badge-1"><FiCode style={{ color: 'var(--blue)' }} /> MERN Stack</div>
              <div className="floating-badge floating-badge-2"><FiCpu style={{ color: 'var(--blue-light)' }} /> DSA — Java</div>
              <div className="floating-badge floating-badge-3"><FiStar style={{ color: 'var(--purple)' }} /> Open to Work</div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
