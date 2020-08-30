import React, { useState, useEffect } from 'react'

/**
 * Returns a number of columns (defined in values) based on the provided media queries
 */
export const useMedia = (queries, values, defaultValue) => {
  // matchMedia is a js equivalent to find if a given media matches the current document
  const match = () =>
    values[queries.findIndex(q => typeof window !== 'undefined' && matchMedia(q).matches)] || defaultValue
  const [value, set] = useState(match)

  useEffect(() => {
    const handler = () => set(match)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])
  return value
}
