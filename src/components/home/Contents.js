import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Contents = () => {
  const data = useStaticQuery(query)
  const contents = data.markdownRemark.frontmatter
  return (
    <div>
      <h1>{contents.content_1.title}</h1>
      <p>{contents.content_1.description}</p>
      <GatsbyImage
        image={getImage(
          contents.content_1.image.childImageSharp.gatsbyImageData
        )}
        alt={contents.content_1.title}
      />
      <h1>{contents.content_2.title}</h1>
      <p>{contents.content_2.description}</p>
      <GatsbyImage
        image={getImage(
          contents.content_2.image.childImageSharp.gatsbyImageData
        )}
        alt={contents.content_1.title}
      />
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
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        content_2 {
          ctaLink
          ctaText
          description
          title
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
