import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const PropertyDetails = ({ data }) => {
  const propertyDetails = data.markdownRemark.frontmatter
  console.log(propertyDetails)
  return (
    <div>
      <Layout>
        <h1>{propertyDetails.title}</h1>
        <p>{propertyDetails.title}</p>
        <p>{propertyDetails.price}</p>
        <p>{propertyDetails.location}</p>
        <p>{propertyDetails.description}</p>
        <GatsbyImage
          image={getImage(
            propertyDetails.image.childImageSharp.gatsbyImageData
          )}
        />
      </Layout>
    </div>
  )
}

export default PropertyDetails
export const query = graphql`
  query PropertyDetailsQuery($id: Int) {
    markdownRemark(frontmatter: { id: { eq: $id } }) {
      frontmatter {
        slug
        title
        location
        price
        description
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
