import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { AboutBrand, AboutContainer, AboutDescrition } from '../styles/About'
const About = ({ data }) => {
  const about = data.markdownRemark.frontmatter
  return (
    <div>
      <Layout>
        <AboutContainer>
          <AboutBrand>{about.brand}</AboutBrand>
          <AboutDescrition>{about.description}</AboutDescrition>
        </AboutContainer>
      </Layout>
    </div>
  )
}

export default About
export const query = graphql`
  query AboutPageQuery {
    markdownRemark(frontmatter: { name: { eq: "about" } }) {
      frontmatter {
        brand
        description
      }
    }
  }
`
