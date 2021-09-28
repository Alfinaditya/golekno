import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

const Hero = () => {
  const data = useStaticQuery(query)
  const hero = data.markdownRemark.frontmatter.hero
  return (
    <div>
      <h1>{hero.title}</h1>
      <p>{hero.description}</p>
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
        }
      }
    }
  }
`
