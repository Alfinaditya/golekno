import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

const Navbar = () => {
  const data = useStaticQuery(query)
  const navLinks = data.markdownRemark.frontmatter.navbar
  return (
    <div>
      <div>
        <Link to='/'>Golekno</Link>
        {navLinks.map(link => (
          <Link key={link.id} to={link.path}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
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
