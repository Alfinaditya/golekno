import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import {
  BrandLink,
  Container,
  Nav,
  NavStyledLink,
  ContainerNavStyledLink,
} from '../styles/Navbar'
import { useLocation } from '@reach/router'

const ACTIVE_STYLE = {
  fontWeight: '500',
}

const Navbar = () => {
  const data = useStaticQuery(query)
  const navLinks = data.markdownRemark.frontmatter.navbar
  const path = useLocation().pathname
  return (
    <Nav location={path !== '/' ? '' : 'home'}>
      <Container>
        <BrandLink location={path !== '/' ? '' : 'home'} to='/'>
          Golekno
        </BrandLink>
        <ContainerNavStyledLink>
          {navLinks.map(link => (
            <NavStyledLink
              location={path !== '/' ? '' : 'home'}
              activeStyle={ACTIVE_STYLE}
              key={link.id}
              to={link.path}
            >
              {link.name}
            </NavStyledLink>
          ))}
        </ContainerNavStyledLink>
      </Container>
    </Nav>
  )
}

export default Navbar

const query = graphql`
  query NavbarQuery {
    markdownRemark(frontmatter: { name: { eq: "navbar" } }) {
      frontmatter {
        navbar {
          id
          name
          path
        }
      }
    }
  }
`
