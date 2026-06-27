import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi'

const CONTACT_ITEMS = [
  { icon: <FiMail />,     label: 'Email',    value: 'soni015972@gmail.com',                        href: 'mailto:soni015972@gmail.com'                                            },
  { icon: <FiPhone />,    label: 'Phone',    value: '+91 9336378736',                              href: 'tel:+919336378736'                                                       },
  { icon: <FiGithub />,   label: 'GitHub',   value: 'github.com/soni015972',                       href: 'https://github.com/soni015972'                                          },
  { icon: <FiLinkedin />, label: 'LinkedIn', value: 'linkedin.com/in/webdeveloper-shubham-soni',   href: 'https://www.linkedin.com/in/webdeveloper-shubham-soni-08753924a/'       },
  { icon: <FiMapPin />,   label: 'Location', value: 'Ghaziabad, Uttar Pradesh, India',             href: null                                                                      },
]

export default function Contact() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={ref} style={{ background: 'var(--bg-dark)' }}>
      <div className="container">

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="section-title">Contact</h2>
          <div className="section-divider" />
          <p className="section-subtitle">Let's connect and build something great</p>
        </motion.div>

        <div className="row g-4 justify-content-center">
          <motion.div className="col-lg-7" initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="contact-card">

              {/* Contact info rows */}
              {CONTACT_ITEMS.map((item) =>
                item.href ? (
                  <a href={item.href} className="contact-item" key={item.label} target={item.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer">
                    <div className="contact-icon-wrap">{item.icon}</div>
                    <div>
                      <div className="contact-label">{item.label}</div>
                      <div className="contact-value">{item.value}</div>
                    </div>
                  </a>
                ) : (
                  <div className="contact-item" key={item.label} style={{ cursor: 'default' }}>
                    <div className="contact-icon-wrap">{item.icon}</div>
                    <div>
                      <div className="contact-label">{item.label}</div>
                      <div className="contact-value">{item.value}</div>
                    </div>
                  </div>
                )
              )}

              {/* Social buttons */}
              <div className="social-grid">
                <motion.a href="https://github.com/soni015972" target="_blank" rel="noreferrer" className="social-btn github" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <FiGithub /> GitHub
                </motion.a>
                <motion.a href="https://www.linkedin.com/in/webdeveloper-shubham-soni-08753924a/" target="_blank" rel="noreferrer" className="social-btn linkedin" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <FiLinkedin /> LinkedIn
                </motion.a>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
