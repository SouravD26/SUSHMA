import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { SALON } from '../data'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to="/" className="logo" onClick={() => setOpen(false)}>
        <span className="logo__mark">S</span>
        <span className="logo__text">
          SUSHMA<small>Beauty &amp; Hair Saloon</small>
        </span>
      </Link>

      <nav className="nav__links">
        {LINKS.map((l) => (
          <NavLink key={l.to} to={l.to} end className="nav__link">
            {({ isActive }) => (
              <>
                {l.label}
                {isActive && <motion.span layoutId="nav-pill" className="nav__pill" />}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <a href={`tel:${SALON.tel}`} className="btn btn--glow nav__cta">Book Now</a>

      <button className={`burger ${open ? 'is-open' : ''}`} onClick={() => setOpen(!open)} aria-label="Menu">
        <span /><span /><span />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {LINKS.map((l, i) => (
              <motion.div key={l.to} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.07 }}>
                <NavLink to={l.to} end className="mobile-menu__link" onClick={() => setOpen(false)}>
                  <em>0{i + 1}</em> {l.label}
                </NavLink>
              </motion.div>
            ))}
            <a href={`tel:${SALON.tel}`} className="btn btn--glow">Call {SALON.phone}</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
