import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Properties = ({ data }) => {
  const properties = data.markdownRemark.frontmatter.properties.property
  return (
    <div>
      <Layout>
        {properties.map(property => (
          <div key={property.id}>
            <h1>{property.title}</h1>
            <GatsbyImage
              image={getImage(property.image.childImageSharp.gatsbyImageData)}
              alt={property.title}
            />
            <p>{property.location}</p>
            <p>{property.price}</p>
          </div>
        ))}
      </Layout>
    </div>
  )
}

export default Properties

export const query = graphql`
  query PropertiesPageQuery {
    markdownRemark(frontmatter: { name: { eq: "properties" } }) {
      frontmatter {
        properties {
          property {
            id
            title
            location
            price
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`
