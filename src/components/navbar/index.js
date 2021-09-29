import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import {
  BrandLink,
  Container,
  Nav,
  NavStyledLink,
  ContainerNavStyledLink,
} from './style'

const Navbar = () => {
  const data = useStaticQuery(query)
  const navLinks = data.markdownRemark.frontmatter.navbar
  return (
    <Nav>
      <Container>
        <BrandLink to='/'>Golekno</BrandLink>
        <ContainerNavStyledLink>
          {navLinks.map(link => (
            <NavStyledLink key={link.id} to={link.path}>
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
