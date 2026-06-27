import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const DSA_TOPICS = [
  { icon: '☕', name: 'Java'                           },
  { icon: '📊', name: 'Arrays'                         },
  { icon: '🔤', name: 'Strings'                        },
  { icon: '🔁', name: 'Recursion'                      },
  { icon: '🔗', name: 'Linked List'                    },
  { icon: '📚', name: 'Stack'                          },
  { icon: '🎯', name: 'Queue'                          },
  { icon: '🌳', name: 'Trees'                          },
  { icon: '🕸️', name: 'Graphs'                         },
  { icon: '🧩', name: 'Dynamic Programming', learning: true },
]

export default function DSA() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="dsa" className="dsa-section" ref={ref}>
      <div className="container">

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="section-title">Data Structures & Algorithms</h2>
          <div className="section-divider" />
          <p className="section-subtitle">Problem-solving with Java</p>
        </motion.div>

        <div className="row g-3">
          {DSA_TOPICS.map((topic, i) => (
            <div className="col-6 col-md-4 col-lg-2" key={topic.name}>
              <motion.div
                className="dsa-card"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ scale: 1.06 }}
              >
                <span className="dsa-icon">{topic.icon}</span>
                <div className="dsa-name">{topic.name}</div>
                {topic.learning && <span className="dsa-badge-learning">Learning</span>}
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
