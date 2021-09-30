import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Container, Description } from './style'

const Footer = () => {
  const data = useStaticQuery(query)
  const footer = data.markdownRemark.frontmatter.footer
  return (
    <Container>
      <Description>{footer.description}</Description>
    </Container>
  )
}
const query = graphql`
  query MyQuery {
    markdownRemark(frontmatter: { name: { eq: "footer" } }) {
      frontmatter {
        footer {
          description
        }
      }
    }
  }
`

export default Footer
