import { useRef } from 'react'
import Page, { PageHero, Reveal } from '../components/Page'
import { SALON, SERVICES } from '../data'

function TiltCard({ s }) {
  const ref = useRef(null)
  const move = (e) => {
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    ref.current.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`
    ref.current.style.setProperty('--mx', `${(x + 0.5) * 100}%`)
    ref.current.style.setProperty('--my', `${(y + 0.5) * 100}%`)
  }
  const leave = () => { ref.current.style.transform = '' }

  return (
    <div ref={ref} className="card card--service glass" onMouseMove={move} onMouseLeave={leave}>
      <div className="card__icon">{s.icon}</div>
      <h3>{s.title}</h3>
      <p>{s.desc}</p>
      <ul>{s.items.map((it) => <li key={it}>{it}</li>)}</ul>
      <a href={`tel:${SALON.tel}`} className="card__link">Book this →</a>
    </div>
  )
}

export default function Services() {
  return (
    <Page>
      <PageHero kicker="Menu" title="Services Designed Around You" text="From quick touch-ups to complete bridal transformations." />
      <section className="section">
        <div className="cards">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.12}>
              <TiltCard s={s} />
            </Reveal>
          ))}
        </div>
        <Reveal className="center muted note">Prices vary by hair length &amp; product. Call {SALON.phone} for a personalised quote.</Reveal>
      </section>
    </Page>
  )
}
