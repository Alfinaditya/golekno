import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
  const data = useStaticQuery(query)
  const footer = data.markdownRemark.frontmatter.footer
  return (
    <div>
      <p>{footer.description}</p>
    </div>
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
