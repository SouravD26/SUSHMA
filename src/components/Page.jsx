import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

export default function Page({ children }) {
  return (
    <motion.main
      className="page"
      initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
      transition={{ duration: 0.6, ease }}
    >
      {children}
    </motion.main>
  )
}

export const Reveal = ({ children, delay = 0, className, now = false }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 50 }}
    {...(now ? { animate: { opacity: 1, y: 0 } } : { whileInView: { opacity: 1, y: 0 } })}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.8, delay, ease }}
  >
    {children}
  </motion.div>
)

export const PageHero = ({ kicker, title, text }) => (
  <section className="page-hero">
    <motion.span className="kicker" initial={{ opacity: 0, letterSpacing: '1em' }} animate={{ opacity: 1, letterSpacing: '0.35em' }} transition={{ duration: 1 }}>
      {kicker}
    </motion.span>
    <h1 className="page-hero__title">
      {title.split(' ').map((w, i) => (
        <span key={i}>
          <span className="word-mask">
            <motion.span initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ delay: 0.2 + i * 0.08, duration: 0.8, ease }}>
              {w}
            </motion.span>
          </span>{' '}
        </span>
      ))}
    </h1>
    {text && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>{text}</motion.p>}
  </section>
)

