import { useState, useEffect } from 'react'

const UseScreenSize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  const updateSize = () =>
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  useEffect(() => (window.onresize = updateSize), [])
  return { size, setSize }
}

export default UseScreenSize
