import React, { useState, useEffect } from 'react'
import { useMedia } from './hooks/usemedia'
import { useMeasure } from './hooks/usemeasure'

export const CssMasonry = ({
  columns: query,
  elements: initialElements,
  firstCategory,
  children,
}) => {

  const columns = useMedia(...query)

  const [bind, { width }] = useMeasure()

  const [elements, setElements] = useState(
    initialElements.map((post, i) => ({
      post: post,
      key: i,
      height: 0, // initial height
      currentWidth: 0,
      currentHeight: 0,
      currentRatio: 1,
      showCat: firstCategory ? post.categories.includes(firstCategory) : 1,
    }))
  )

  const reSetElements = (image, h, w) => {
    const el = elements.find(el => el.key === image.key)
    el.currentHeight = parseInt(h)
    el.currentWidth = parseInt(w)
    el.currentRatio = w / h
    setElements([...elements])
  }

  const columnHeights = Array(columns).fill(0)

  const transitions = elements.map(el => {
    if (!el.showCat) return { ...el, x: 0, y: 0, width: 0, height: 0 }
    const column = columnHeights.indexOf(Math.min(...columnHeights)) // Basic masonry-grid placing, puts tile into the smallest column using Math.min
    const elWidth = parseInt((width / columns) * column) // el ancho del elemento basado en la columna
    const elHeight = parseInt(width / columns / el.currentRatio) // la altura del elemento considerando su ratio de serie
    const x = elWidth // X = container width / number of columns * column index, Y = it's just the height of the current column
    const y = (columnHeights[column] += elHeight) - elHeight // X = container width / number of columns * column index, Y = it's just the height of the current column
    return { ...el, x, y, width: width / columns, height: el.height }
  })

  return (
    <div className="cssmasonry_grid">
      <div className="cssmasonry_masonry" {...bind} style={{ height: Math.max(...columnHeights) }}>
        {transitions.map(t => {
          const { item, key, post, x, y, ...rest } = t

          return (
            <div key={`item${key}`} style={{ transform: `translate3d(${x}px,${y}px,0)`, ...rest }}>
              <Element image={t} reSetElements={reSetElements} children={children} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

const Element = ({ image, reSetElements, children }) => {
  const { post } = image

  const [bind, { width, height }] = useMeasure()

  useEffect(() => {
    if (height !== 0 && width !== 0) reSetElements(image, height, width)
  }, [height, width])

  return (
    <div className="cssmasonry_masonry_element" {...bind}>
      <div>{children(post)}</div>
    </div>
  )
}
