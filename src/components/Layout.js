import React from 'react'
import Footer from './Footer'
import GlobalStyle from '../styles/GlobalStyle'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
