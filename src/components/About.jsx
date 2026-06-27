import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMapPin, FiBook, FiCalendar, FiCode, FiCheckCircle } from 'react-icons/fi'
import profileImg from '../assets/Profile.jpeg'

const INFO_ITEMS = [
  { icon: <FiBook />,        label: 'Degree',   value: 'B.Tech — Computer Science Engineering' },
  { icon: <FiMapPin />,      label: 'College',  value: 'ABES Engineering College, Ghaziabad'   },
  { icon: <FiCalendar />,    label: 'Duration', value: '2023 – 2027'                            },
  { icon: <FiCode />,        label: 'Focus',    value: 'MERN Stack & Java DSA'                  },
  { icon: <FiCheckCircle />, label: 'Status',   value: '🟢 Open to Internships & Placements'   },
]

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }
const fadeUp  = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

export default function About() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} style={{ background: 'var(--bg-dark)' }}>
      <div className="container">

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="section-title">About Me</h2>
          <div className="section-divider" />
          <p className="section-subtitle">A little about who I am and what I do</p>
        </motion.div>

        <div className="row g-4 align-items-start">

          {/* Bio card with profile photo */}
          <motion.div className="col-lg-7" initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="about-card">

              {/* Profile photo + name row */}
              <div className="d-flex align-items-center gap-4 mb-4">
                <div style={{
                  width: 100, height: 100, borderRadius: '50%',
                  border: '3px solid var(--blue)',
                  boxShadow: '0 0 20px rgba(13,110,253,0.4)',
                  overflow: 'hidden', flexShrink: 0,
                }}>
                  <img
                    src={profileImg}
                    alt="Shubham Soni"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <h5 style={{ color: 'white', fontWeight: 700, marginBottom: 4 }}>Shubham Soni</h5>
                  <p style={{ color: 'var(--blue-light)', fontSize: '0.9rem', marginBottom: 4 }}>
                    MERN Stack Developer & DSA Enthusiast
                  </p>
                  <span style={{
                    background: 'rgba(16,185,129,0.15)',
                    border: '1px solid rgba(16,185,129,0.3)',
                    color: '#10B981', padding: '2px 10px',
                    borderRadius: 20, fontSize: '0.75rem', fontWeight: 600,
                  }}>
                    🟢 Open to Work
                  </span>
                </div>
              </div>

              {/* Bio text */}
              <p className="about-text mb-3">
                I am a <span className="about-highlight">Computer Science Engineering</span> student at{' '}
                <span className="about-highlight">ABES Engineering College, Ghaziabad</span> (2023–2027),
                passionate about building real-world web applications.
              </p>
              <p className="about-text mb-3">
                I specialise in the <span className="about-highlight">MERN Stack</span> and solve Data Structures &amp; Algorithms using{' '}
                <span className="about-highlight">Java</span>.
              </p>
              <p className="about-text mb-3">
                I built <span className="about-highlight">Wanderlust</span> — a full-stack travel accommodation booking platform with
                authentication, CRUD operations, MongoDB integration, and a responsive Bootstrap UI.
              </p>
              <p className="about-text">
                I enjoy learning new technologies and building practical projects while preparing for software engineering placements.
              </p>
            </div>
          </motion.div>

          {/* Quick info */}
          <motion.div className="col-lg-5" variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <div className="about-card">
              <h5 style={{ color: 'var(--blue-light)', fontWeight: 700, marginBottom: '20px' }}>Quick Info</h5>
              {INFO_ITEMS.map((item) => (
                <motion.div className="about-info-item" key={item.label} variants={fadeUp}>
                  <div className="about-info-icon">{item.icon}</div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontWeight: 500, fontSize: '0.92rem' }}>{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
