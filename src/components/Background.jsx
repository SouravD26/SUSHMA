import { useEffect, useRef } from 'react'

export default function Background() {
  const ref = useRef(null)

  useEffect(() => {
    const c = ref.current
    const ctx = c.getContext('2d')
    let w, h, raf
    const resize = () => { w = c.width = innerWidth; h = c.height = innerHeight }
    resize()
    addEventListener('resize', resize)
    const count = innerWidth < 700 ? 40 : 80
    const pts = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.6 + 0.4,
    }))
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const p of pts) {
        p.x = (p.x + p.vx + w) % w
        p.y = (p.y + p.vy + h) % h
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255,190,220,0.7)'
        ctx.fill()
      }
      for (let i = 0; i < pts.length; i++)
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y
          const d = dx * dx + dy * dy
          if (d < 14000) {
            ctx.strokeStyle = `rgba(232,121,249,${0.12 * (1 - d / 14000)})`
            ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke()
          }
        }
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', resize) }
  }, [])

  return (
    <div className="bg" aria-hidden>
      <div className="orb orb--1" />
      <div className="orb orb--2" />
      <div className="orb orb--3" />
      <div className="grid-lines" />
      <canvas ref={ref} />
    </div>
  )
}
