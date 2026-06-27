import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const PROJECTS = [
  {
    number: '01',
    icon: '✈️',
    title: 'Wanderlust',
    desc: 'A full-stack travel accommodation booking web application inspired by Airbnb.',
    stack: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'EJS', 'Passport.js'],
    features: ['User Authentication', 'Property Listings', 'CRUD Operations', 'Reviews & Ratings', 'Image Upload', 'Responsive Design', 'Secure Login'],
    github: 'https://github.com/soni015972/wanderlust',
    demo: 'https://wanderlust-naj6.onrender.com/listings',
  },
  {
    number: '02',
    icon: '💼',
    title: 'Personal Portfolio',
    desc: 'A modern responsive portfolio built with React.js and Bootstrap to showcase my skills, projects, and contact info.',
    stack: ['React.js', 'Bootstrap 5', 'Framer Motion', 'React Icons', 'Vite'],
    features: ['Responsive Design', 'Sticky Navbar', 'Animated Hero', 'Skills Showcase', 'Education Timeline', 'Contact Section', 'Dark Theme'],
    github: 'https://github.com/soni015972',
    demo: 'https://my-portfolio-m473.onrender.com',
  },
]

export default function Projects() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <div className="container">

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="section-title">Projects</h2>
          <div className="section-divider" />
          <p className="section-subtitle">Things I've built</p>
        </motion.div>

        <div className="row g-4">
          {PROJECTS.map((project, i) => (
            <div className="col-lg-6" key={project.title}>
              <motion.div
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -8 }}
              >
                {/* Card header */}
                <div className="project-header">
                  <div className="project-icon-wrap">{project.icon}</div>
                  <div>
                    <div className="project-number">Project {project.number}</div>
                    <div className="project-title">{project.title}</div>
                  </div>
                </div>

                {/* Card body */}
                <div className="project-body">
                  <p className="project-desc">{project.desc}</p>

                  <div className="tech-stack-label">Tech Stack</div>
                  <div className="mb-3">
                    {project.stack.map((t) => <span className="tech-badge" key={t}>{t}</span>)}
                  </div>

                  <div className="tech-stack-label">Features</div>
                  <ul className="feature-list">
                    {project.features.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                </div>

                {/* Card footer buttons */}
                <div className="project-footer">
                  <motion.a href={project.github} target="_blank" rel="noreferrer" className="btn-outline-custom" style={{ flex: 1, justifyContent: 'center', padding: '10px' }} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                    <FiGithub /> GitHub
                  </motion.a>
                  {project.demo ? (
                    <motion.a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary-custom" style={{ flex: 1, justifyContent: 'center', padding: '10px' }} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                      <FiExternalLink /> Live Demo
                    </motion.a>
                  ) : (
                    <button className="btn-primary-custom" style={{ flex: 1, justifyContent: 'center', padding: '10px', opacity: 0.5, cursor: 'not-allowed' }} disabled>
                      <FiExternalLink /> Coming Soon
                    </button>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
