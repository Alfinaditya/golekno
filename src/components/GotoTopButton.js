import React from 'react'
import { ScrolltoTopButton, TriangleIcon } from '../styles/GotoTopButton'

const GotoTopButton = () => {
  const windowGlobal = typeof window !== 'undefined' && window
  return (
    <>
      <ScrolltoTopButton
        onClick={() => windowGlobal.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <TriangleIcon />
      </ScrolltoTopButton>
    </>
  )
}

export default GotoTopButton
