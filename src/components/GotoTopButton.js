import React from 'react'
import { ScrolltoTopButton, TriangleIcon } from '../styles/GotoTopButton'

const GotoTopButton = () => {
  return (
    <>
      <ScrolltoTopButton
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <TriangleIcon />
      </ScrolltoTopButton>
    </>
  )
}

export default GotoTopButton
