import React from 'react'
import Footer from './footer'
import GlobalStyle from './GlobalStyle'
import Navbar from './navbar'

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
