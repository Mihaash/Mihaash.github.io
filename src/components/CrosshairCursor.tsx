import { useEffect, useRef } from 'react'

export default function CrosshairCursor() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onMouseMove = (e: MouseEvent) => {
      el.style.left = `${e.clientX}px`
      el.style.top = `${e.clientY}px`
    }

    const onMouseDown = () => el.classList.add('clicking')
    const onMouseUp = () => el.classList.remove('clicking')

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mouseup', onMouseUp)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mouseup', onMouseUp)
    }
  }, [])

  return (
    <div id="crosshair" ref={ref}>
      <div className="ch-ring-outer" />
      <div className="ch-ring" />
      <div className="ch-line ch-h" />
      <div className="ch-line ch-v" />
      <div className="ch-dot" />
    </div>
  )
}
