import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import Page, { Reveal } from '../components/Page'
import { SALON, SERVICES } from '../data'

const ease = [0.22, 1, 0.36, 1]

export default function Home() {
  const { scrollY } = useScroll()
  const ringY = useTransform(scrollY, [0, 600], [0, 150])
  const ringR = useTransform(scrollY, [0, 600], [0, 90])

  return (
    <Page>
      <section className="hero">
        <div className="hero__copy">
          <motion.span className="chip" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <i className="pulse" /> Now open in Narendrapur
          </motion.span>
          <h1 className="hero__title">
            {['Beauty,', 'Re-imagined', 'for Tomorrow.'].map((line, i) => (
              <span className="word-mask" key={i}>
                <motion.span className={i === 1 ? 'grad-text' : ''} initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ delay: 0.3 + i * 0.15, duration: 1, ease }}>
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p className="hero__sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
            <b>Sushma Beauty &amp; Hair Saloon</b> blends expert artistry with modern techniques — hair, skin, bridal and makeup crafted just for you.
          </motion.p>
          <motion.div className="hero__actions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}>
            <a href={`tel:${SALON.tel}`} className="btn btn--glow">Book Appointment</a>
            <Link to="/services" className="btn btn--ghost">Explore Services →</Link>
          </motion.div>
        </div>

        <motion.div className="hero__visual" style={{ y: ringY }} initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.4, ease }}>
          <motion.div className="ring ring--a" style={{ rotate: ringR }} />
          <div className="ring ring--b" />
          <div className="ring ring--c" />
          <div className="hero__monogram">
            <span>S</span>
            <small>EST · NARENDRAPUR</small>
          </div>
          {['Hair', 'Skin', 'Bridal', 'Makeup'].map((t, i) => (
            <motion.span key={t} className={`float-tag float-tag--${i}`} animate={{ y: [0, -14, 0] }} transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}>
              ✦ {t}
            </motion.span>
          ))}
        </motion.div>
      </section>

      <section className="stats">
        {[['10+', 'Years of Artistry'], ['5K+', 'Happy Clients'], ['40+', 'Premium Services'], ['500+', 'Bridal Looks']].map(([n, l], i) => (
          <Reveal key={l} delay={i * 0.1} className="stat glass">
            <strong className="grad-text">{n}</strong>
            <span>{l}</span>
          </Reveal>
        ))}
      </section>

      <section className="section">
        <Reveal className="section__head">
          <span className="kicker">What we do</span>
          <h2>Signature <span className="grad-text">Experiences</span></h2>
        </Reveal>
        <div className="cards">
          {SERVICES.slice(0, 3).map((s, i) => (
            <Reveal key={s.title} delay={i * 0.12}>
              <div className="card glass">
                <div className="card__icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="center"><Link to="/services" className="btn btn--ghost">View all services →</Link></Reveal>
      </section>

      <section className="section">
        <Reveal className="cta glass">
          <div className="cta__glow" />
          <span className="kicker">Your glow-up awaits</span>
          <h2>Ready for a <span className="grad-text">new you?</span></h2>
          <p>Call us or drop a WhatsApp message to reserve your slot.</p>
          <div className="hero__actions center">
            <a href={`tel:${SALON.tel}`} className="btn btn--glow">☎ {SALON.phone}</a>
            <a href={`https://wa.me/${SALON.whatsapp}`} target="_blank" rel="noreferrer" className="btn btn--ghost">WhatsApp Us</a>
          </div>
        </Reveal>
      </section>
    </Page>
  )
}
