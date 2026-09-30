import { useState } from 'react'
import Page, { PageHero, Reveal } from '../components/Page'
import { SALON, SERVICES } from '../data'

export default function Contact() {
  const [form, setForm] = useState({ name: '', service: SERVICES[0].title, date: '' })
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const msg = `Hello Sushma Beauty & Hair Saloon! I'm ${form.name}. I'd like to book: ${form.service}${form.date ? ` on ${form.date}` : ''}.`
    window.open(`https://wa.me/${SALON.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <Page>
      <PageHero kicker="Get in touch" title="Book Your Glow Session" text="Call, WhatsApp or walk in — we'd love to see you." />
      <section className="section contact">
        <Reveal now className="contact__info">
          <div className="info glass">
            <span className="info__icon">⌖</span>
            <div><h4>Address</h4><p>{SALON.address}</p><a href={SALON.maps} target="_blank" rel="noreferrer">Get directions →</a></div>
          </div>
          <div className="info glass">
            <span className="info__icon">☎</span>
            <div><h4>Phone</h4><a href={`tel:${SALON.tel}`}>{SALON.phone}</a></div>
          </div>
          <div className="info glass">
            <span className="info__icon">✆</span>
            <div><h4>WhatsApp</h4><a href={`https://wa.me/${SALON.whatsapp}`} target="_blank" rel="noreferrer">Chat with us</a></div>
          </div>
        </Reveal>

        <Reveal now delay={0.15}>
          <form className="form glass" onSubmit={submit}>
            <h3>Quick Booking</h3>
            <label>Your name<input required value={form.name} onChange={set('name')} placeholder="Enter your name" /></label>
            <label>Service
              <select value={form.service} onChange={set('service')}>
                {SERVICES.map((s) => <option key={s.title}>{s.title}</option>)}
              </select>
            </label>
            <label>Preferred date<input type="date" value={form.date} onChange={set('date')} /></label>
            <button className="btn btn--glow" type="submit">Send via WhatsApp</button>
          </form>
        </Reveal>
      </section>

      <section className="section">
        <Reveal now delay={0.3} className="map glass">
          <iframe title="Salon location" src={SALON.embed} referrerPolicy="no-referrer-when-downgrade" />
        </Reveal>
      </section>
    </Page>
  )
}
