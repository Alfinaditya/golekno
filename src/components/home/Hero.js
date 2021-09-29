import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Hero = () => {
  const data = useStaticQuery(query)
  const hero = data.markdownRemark.frontmatter.hero
  console.log(hero)
  return (
    <div>
      <h1>{hero.title}</h1>
      <p>{hero.description}</p>
      <GatsbyImage
        image={getImage(hero.image.childImageSharp.gatsbyImageData)}
        alt={hero.title}
      />
    </div>
  )
}

export default Hero

const query = graphql`
  query HeroQuery {
    markdownRemark(frontmatter: { name: { eq: "hero" } }) {
      frontmatter {
        hero {
          title
          description
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
