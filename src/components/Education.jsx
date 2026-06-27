import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCalendar, FiMapPin, FiBook, FiAward } from 'react-icons/fi'

const EDUCATION = [
  {
    degree: 'Bachelor of Technology',
    school: 'ABES Engineering College, Ghaziabad',
    field: 'Computer Science Engineering',
    duration: '2023 – 2027',
    location: 'Ghaziabad, UP',
    score: null,
  },
  {
    degree: 'Senior Secondary (12th)',
    school: 'S M D D S B S Inter College',
    field: 'CBSE Board',
    duration: '2022',
    location: 'India',
    score: '80.6%',
  },
  {
    degree: 'Secondary (10th)',
    school: 'Shripati International Public School',
    field: 'CBSE Board',
    duration: '2020',
    location: 'India',
    score: '85.83%',
  },
]

export default function Education() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" ref={ref} style={{ background: 'var(--bg-dark)' }}>
      <div className="container">

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="section-title">Education</h2>
          <div className="section-divider" />
          <p className="section-subtitle">My academic journey</p>
        </motion.div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="timeline">
              {EDUCATION.map((edu, i) => (
                <motion.div
                  className="timeline-item"
                  key={edu.degree}
                  initial={{ opacity: 0, x: -40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  <div className="edu-card">
                    <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-1">
                      <div className="edu-degree">{edu.degree}</div>
                      {edu.score && (
                        <span style={{
                          background: 'rgba(13,110,253,0.15)',
                          border: '1px solid rgba(13,110,253,0.3)',
                          color: 'var(--blue-light)',
                          padding: '3px 12px',
                          borderRadius: '20px',
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          whiteSpace: 'nowrap',
                        }}>
                          <FiAward style={{ marginRight: 4, verticalAlign: 'middle' }} />
                          {edu.score}
                        </span>
                      )}
                    </div>
                    <div className="edu-college">{edu.school}</div>
                    <div className="edu-meta">
                      <div className="edu-meta-item"><FiBook /> {edu.field}</div>
                      <div className="edu-meta-item"><FiCalendar /> {edu.duration}</div>
                      <div className="edu-meta-item"><FiMapPin /> {edu.location}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
