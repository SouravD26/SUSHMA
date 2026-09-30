import { Link } from 'react-router-dom'
import { SALON } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="marquee">
        <div className="marquee__track">
          {[0, 1].map((k) => (
            <span key={k}>HAIR ✦ SKIN ✦ BRIDAL ✦ MAKEUP ✦ COLOUR ✦ SPA ✦ NAILS ✦ SUSHMA ✦&nbsp;</span>
          ))}
        </div>
      </div>
      <div className="footer__grid">
        <div>
          <div className="logo"><span className="logo__mark">S</span><span className="logo__text">SUSHMA<small>Beauty &amp; Hair Saloon</small></span></div>
          <p className="muted">Where beauty meets the future. Narendrapur&apos;s premium destination for hair, skin and bridal artistry.</p>
        </div>
        <div className="footer__links">
          <h4>Explore</h4>
          <Link to="/about">About</Link><Link to="/services">Services</Link><Link to="/gallery">Gallery</Link><Link to="/contact">Contact</Link>
        </div>
        <div className="footer__links">
          <h4>Visit</h4>
          <p className="muted">{SALON.address}</p>
          <a href={`tel:${SALON.tel}`}>☎ {SALON.phone}</a>
        </div>
      </div>
      <p className="footer__copy">© {new Date().getFullYear()} {SALON.name}. All rights reserved.</p>
    </footer>
  )
}
