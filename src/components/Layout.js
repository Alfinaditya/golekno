import React from 'react'
import Footer from './Footer'
import GlobalStyle from '../styles/GlobalStyle'
import Navbar from './Navbar'
import styled from 'styled-components'

const Content = styled.div`
  min-height: 100vh;
  margin-bottom: 20px;
`

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </div>
  )
}

export default Layout
