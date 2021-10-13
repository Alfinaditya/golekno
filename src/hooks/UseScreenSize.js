import { useState, useEffect } from 'react'

const windowGlobal = typeof window !== 'undefined' && window
const UseScreenSize = () => {
  const [size, setSize] = useState({
    width: windowGlobal.innerWidth,
    height: windowGlobal.innerHeight,
  })
  const updateSize = () =>
    setSize({
      width: windowGlobal.innerWidth,
      height: windowGlobal.innerHeight,
    })
  useEffect(() => (windowGlobal.onresize = updateSize), [])
  return { size, setSize }
}

export default UseScreenSize
