import { useState, useEffect, useRef, useCallback } from 'react'

const TOTAL = 6
const COOLDOWN = 1400
const INNER_SCROLL_GRACE = 500 // ms after a panel scroll during which wheel momentum must not flip planets

// Nearest ancestor that actually scrolls vertically (the content panel when it overflows)
function scrollerFor(el) {
  for (; el && el !== document.body; el = el.parentElement) {
    if (el.scrollHeight > el.clientHeight + 1 && /(auto|scroll)/.test(getComputedStyle(el).overflowY)) return el
  }
  return null
}
const canScroll = (el, dir) => !!el && (dir > 0 ? el.scrollTop + el.clientHeight < el.scrollHeight - 1 : el.scrollTop > 0)

export function useSpaceScroll({ enabled = true } = {}) {
  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const cooldown = useRef(false)
  const currentRef = useRef(0)
  const timer = useRef(null)

  const navigate = useCallback((index) => {
    if (cooldown.current || index === currentRef.current || index < 0 || index >= TOTAL) return
    cooldown.current = true
    currentRef.current = index
    setCurrent(index)
    setTransitioning(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      cooldown.current = false
      setTransitioning(false)
    }, COOLDOWN)
  }, [])

  const move = useCallback((dir) => navigate(currentRef.current + dir), [navigate])

  useEffect(() => {
    if (!enabled) return undefined

    // A panel taller than the screen scrolls first; the planet changes only once it is at its edge
    let lastInner = 0
    const onWheel = (e) => {
      const dir = e.deltaY > 0 ? 1 : -1
      if (canScroll(scrollerFor(e.target), dir)) { lastInner = Date.now(); return }
      e.preventDefault()
      if (Date.now() - lastInner < INNER_SCROLL_GRACE) return
      move(dir)
    }
    const onKey = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') move(1)
      if (e.key === 'ArrowUp'   || e.key === 'PageUp')   move(-1)
    }
    let ty = 0, tScroller = null, tTop = 0
    const onTouchStart = (e) => {
      ty = e.touches[0].clientY
      tScroller = scrollerFor(e.target)
      tTop = tScroller ? tScroller.scrollTop : 0
    }
    const onTouchEnd   = (e) => {
      const d = ty - e.changedTouches[0].clientY
      if (Math.abs(d) <= 50) return
      const dir = d > 0 ? 1 : -1
      // the swipe scrolled the panel, or the panel still has room that way: it was a scroll, not a planet change
      if (tScroller && (tScroller.scrollTop !== tTop || canScroll(tScroller, dir))) return
      move(dir)
    }

    window.addEventListener('wheel',      onWheel,      { passive: false })
    window.addEventListener('keydown',    onKey)
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend',   onTouchEnd,   { passive: true })

    return () => {
      window.removeEventListener('wheel',      onWheel)
      window.removeEventListener('keydown',    onKey)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend',   onTouchEnd)
      clearTimeout(timer.current)
    }
  }, [enabled, move])

  return { current, navigate, transitioning }
}
