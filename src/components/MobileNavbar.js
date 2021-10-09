import { graphql, useStaticQuery } from 'gatsby'
import React, { useState } from 'react'
import {
  HamburgerMenu,
  HamburgerMenuContainer,
  MobileBrandStyledLink,
  MobileLinks,
  MobileNav,
  MobileNavStyledLink,
} from '../styles/MobileNavbar'

const MobileNavbar = () => {
  const data = useStaticQuery(query)
  const navLinks = data.markdownRemark.frontmatter.navbar
  const [open, setOpen] = useState(true)
  return (
    <MobileNav>
      <HamburgerMenuContainer>
        <HamburgerMenu onClick={() => setOpen(!open)} />
      </HamburgerMenuContainer>
      {open && (
        <MobileLinks>
          <MobileBrandStyledLink>Golekno</MobileBrandStyledLink>
          {navLinks.map(link => (
            <MobileNavStyledLink key={link.id} to={link.path}>
              {link.name}
            </MobileNavStyledLink>
          ))}
        </MobileLinks>
      )}
    </MobileNav>
  )
}

export default MobileNavbar

const query = graphql`
  query MobileNavbarQuery {
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
