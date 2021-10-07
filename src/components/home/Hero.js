import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  HeroSection,
  HeroContainer,
  HeroImage,
  HeroDescription,
  HeroTitle,
  HeroText,
} from '../../styles/home/Hero'

const Hero = () => {
  const data = useStaticQuery(query)
  const hero = data.markdownRemark.frontmatter.hero
  return (
    <HeroSection>
      <HeroContainer>
        <HeroText>
          <HeroTitle>{hero.title}</HeroTitle>
          <HeroDescription>{hero.description}</HeroDescription>
        </HeroText>
        <HeroImage>
          <GatsbyImage
            image={getImage(hero.image.childImageSharp.gatsbyImageData)}
            alt={hero.title}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '34px',
            }}
          />
        </HeroImage>
      </HeroContainer>
    </HeroSection>
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
