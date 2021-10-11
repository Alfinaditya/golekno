import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import {
  Container,
  Nav,
  NavStyledLink,
  ContainerNavStyledLink,
  BrandStyledLink,
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
    <Nav ishome={path === '/' ? 1 : 0}>
      <Container>
        <BrandStyledLink ishome={path === '/' ? 1 : 0} to='/'>
          Golekno
        </BrandStyledLink>
        <ContainerNavStyledLink>
          {navLinks.map(link => (
            <NavStyledLink
              ishome={path !== '/' ? 1 : 0}
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
