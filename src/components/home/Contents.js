import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

const Contents = () => {
  const data = useStaticQuery(query)
  const contents = data.markdownRemark.frontmatter
  return (
    <div>
      <h1>{contents.content_1.title}</h1>
      <p>{contents.content_1.description}</p>

      <h1>{contents.content_2.title}</h1>
      <p>{contents.content_2.description}</p>
      <Link to={contents.content_2.ctaLink}>{contents.content_2.ctaText}</Link>
    </div>
  )
}

export default Contents

const query = graphql`
  query ContentQuery {
    markdownRemark(frontmatter: { name: { eq: "content" } }) {
      frontmatter {
        content_1 {
          description
          title
        }
        content_2 {
          ctaLink
          ctaText
          description
          title
        }
      }
    }
  }
`
