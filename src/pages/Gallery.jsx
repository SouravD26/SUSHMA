import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Page, { PageHero } from '../components/Page'
import { GALLERY } from '../data'

const TAGS = ['All', ...new Set(GALLERY.map((g) => g.tag))]

export default function Gallery() {
  const [tag, setTag] = useState('All')
  const items = tag === 'All' ? GALLERY : GALLERY.filter((g) => g.tag === tag)

  return (
    <Page>
      <PageHero kicker="Portfolio" title="Looks We Love" text="A glimpse of transformations from our chairs." />
      <section className="section">
        <div className="filters">
          {TAGS.map((t) => (
            <button key={t} className={`filter ${tag === t ? 'is-active' : ''}`} onClick={() => setTag(t)}>
              {t}
              {tag === t && <motion.span layoutId="filter-pill" className="filter__pill" />}
            </button>
          ))}
        </div>
        <motion.div layout className="masonry">
          <AnimatePresence>
            {items.map((g, i) => (
              <motion.div
                layout
                key={g.title}
                className={`tile ${i % 4 === 0 ? 'tile--tall' : ''}`}
                style={{ '--h': g.hue, backgroundImage: g.img ? `url(${g.img})` : undefined }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <div className="tile__shine" />
                <div className="tile__info">
                  <span>{g.tag}</span>
                  <h3>{g.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </Page>
  )
}
