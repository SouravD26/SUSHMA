import Page, { PageHero, Reveal } from '../components/Page'

const VALUES = [
  ['01', 'Expert Artists', 'Trained stylists and beauticians who stay ahead of every trend.'],
  ['02', 'Premium Products', 'Only trusted, skin-safe professional brands touch your hair and skin.'],
  ['03', 'Hygiene First', 'Sterilised tools, fresh disposables and a spotless studio every day.'],
  ['04', 'Personal Care', 'Every look is consulted, customised and crafted around you.'],
]

export default function About() {
  return (
    <Page>
      <PageHero kicker="Our Story" title="Crafting Confidence Since Day One" text="A neighbourhood salon in Narendrapur with a vision beyond the ordinary." />

      <section className="section split">
        <Reveal className="split__art glass">
          <div className="ring ring--a" />
          <div className="ring ring--b" />
          <span className="split__letter grad-text">S</span>
        </Reveal>
        <Reveal delay={0.15} className="split__text">
          <span className="kicker">Who we are</span>
          <h2>More than a salon — <span className="grad-text">an experience.</span></h2>
          <p>
            Sushma Beauty &amp; Hair Saloon was born from a simple belief: every woman deserves to feel extraordinary.
            From everyday grooming to the most important day of your life, we combine skilled hands, modern techniques
            and warm hospitality to bring out your most confident self.
          </p>
          <p>
            Located on Vivekananda Sarani, Narendrapur, we&apos;ve become the trusted beauty destination for families,
            students and brides across the neighbourhood.
          </p>
        </Reveal>
      </section>

      <section className="section">
        <Reveal className="section__head">
          <span className="kicker">Why choose us</span>
          <h2>The <span className="grad-text">Sushma</span> Promise</h2>
        </Reveal>
        <div className="cards cards--4">
          {VALUES.map(([n, t, d], i) => (
            <Reveal key={n} delay={i * 0.1}>
              <div className="card glass">
                <span className="card__num">{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </Page>
  )
}
