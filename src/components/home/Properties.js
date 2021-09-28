import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Properties = () => {
  const data = useStaticQuery(query)
  const properties = data.markdownRemark.frontmatter.properties
  return (
    <div>
      <h1>{properties.title}</h1>
      <p>{properties.description}</p>
      {properties.property.map(property => (
        <div key={property.id}>
          <h1>{property.title}</h1>
          <p>{property.location}</p>
          <p>{property.price}</p>
          <GatsbyImage
            image={getImage(property.image.childImageSharp.gatsbyImageData)}
            alt={property.title}
          />
        </div>
      ))}
    </div>
  )
}

const query = graphql`
  query PropertiesQuery {
    markdownRemark(frontmatter: { name: { eq: "properties" } }) {
      frontmatter {
        properties {
          title
          description
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
export default Properties
