import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap,
  FaNodeJs, FaJava, FaGitAlt, FaGithub,
} from 'react-icons/fa'
import { FiCode } from 'react-icons/fi'
import {
  SiMongodb, SiExpress, SiMysql, SiPostman, SiCplusplus, SiC,
} from 'react-icons/si'

const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5',       icon: <FaHtml5    style={{ color: '#E44D26' }} /> },
      { name: 'CSS3',        icon: <FaCss3Alt  style={{ color: '#1572B6' }} /> },
      { name: 'JavaScript',  icon: <FaJs       style={{ color: '#F7DF1E' }} /> },
      { name: 'React.js',    icon: <FaReact    style={{ color: '#61DAFB' }} /> },
      { name: 'Bootstrap',   icon: <FaBootstrap style={{ color: '#7952B3' }} /> },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js',    icon: <FaNodeJs  style={{ color: '#3C873A' }} /> },
      { name: 'Express.js', icon: <SiExpress style={{ color: '#aaa' }}    /> },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb style={{ color: '#47A248' }} /> },
      { name: 'MySQL',   icon: <SiMysql   style={{ color: '#00758F' }} /> },
    ],
  },
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Java',   icon: <FaJava    style={{ color: '#ED8B00' }} /> },
      { name: 'C++',    icon: <SiCplusplus style={{ color: '#00599C' }} /> },
      { name: 'C',      icon: <SiC        style={{ color: '#A8B9CC' }} /> },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git',     icon: <FaGitAlt  style={{ color: '#F05032' }} /> },
      { name: 'GitHub',  icon: <FaGithub  style={{ color: '#fff'    }} /> },
      { name: 'VS Code', icon: <FiCode style={{ color: '#007ACC' }} /> },
      { name: 'Postman', icon: <SiPostman style={{ color: '#FF6C37' }} /> },
    ],
  },
]

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
}

export default function Skills() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} style={{ background: 'var(--bg-dark)' }}>
      <div className="container">

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="section-title">Skills</h2>
          <div className="section-divider" />
          <p className="section-subtitle">Technologies I work with</p>
        </motion.div>

        <div className="row g-4">
          {SKILL_CATEGORIES.map((cat, i) => (
            <div className="col-lg-4 col-md-6" key={cat.title}>
              <motion.div
                className="skill-category-card"
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                whileHover={{ scale: 1.02 }}
              >
                <div className="skill-category-title">{cat.title}</div>
                {cat.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <span className="skill-icon">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
