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
import { useLocation } from '@reach/router'

const ACTIVE_STYLE = {
  fontWeight: '500',
}
const MobileNavbar = () => {
  const data = useStaticQuery(query)
  const navLinks = data.markdownRemark.frontmatter.navbar
  const [open, setOpen] = useState(true)
  const path = useLocation().pathname
  return (
    <MobileNav>
      <HamburgerMenuContainer>
        <HamburgerMenu onClick={() => setOpen(!open)} />
      </HamburgerMenuContainer>
      {open && (
        <MobileLinks ishome={path === '/' ? 1 : 0}>
          <MobileBrandStyledLink ishome={path === '/' ? 1 : 0} to='/'>
            Golekno
          </MobileBrandStyledLink>
          {navLinks.map(link => (
            <MobileNavStyledLink
              ishome={path === '/' ? 1 : 0}
              activeStyle={ACTIVE_STYLE}
              key={link.id}
              to={link.path}
            >
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
