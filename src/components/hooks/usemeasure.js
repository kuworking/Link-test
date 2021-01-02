import React, { useRef, useState, useEffect } from "react"

/**
 * Returns a ref to add to an element, and for this element returns the contentRect via ResizeObserver
 */
export const useMeasure = () => {
  const ref = useRef()
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 })
  const [ro] = useState(
    () =>
      typeof window !== "undefined" &&
      new ResizeObserver(([entry]) => set(entry.contentRect))
  )
  useEffect(() => (ro.observe(ref.current), ro.disconnect), [ro])
  return [{ ref }, bounds]
}
