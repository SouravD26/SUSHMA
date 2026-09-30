import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    if (matchMedia('(pointer: coarse)').matches) return
    document.body.classList.add('has-cursor')
    let x = 0, y = 0, rx = 0, ry = 0, raf
    const move = (e) => { x = e.clientX; y = e.clientY }
    const over = (e) => ring.current?.classList.toggle('is-hover', !!e.target.closest('a,button,.card,.tile'))
    const loop = () => {
      rx += (x - rx) * 0.15; ry += (y - ry) * 0.15
      if (dot.current) dot.current.style.transform = `translate(${x}px,${y}px)`
      if (ring.current) ring.current.style.transform = `translate(${rx}px,${ry}px)`
      raf = requestAnimationFrame(loop)
    }
    addEventListener('mousemove', move); addEventListener('mouseover', over); loop()
    return () => { removeEventListener('mousemove', move); removeEventListener('mouseover', over); cancelAnimationFrame(raf) }
  }, [])

  return (<><div ref={dot} className="cursor-dot" /><div ref={ring} className="cursor-ring" /></>)
}
