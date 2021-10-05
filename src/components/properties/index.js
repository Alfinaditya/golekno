import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'
import { PropertiesContainer, PropertyContainer } from './style'
import {
  PropertyDescription,
  PropertyPrice,
  PropertyTitle,
  PropertyLocation,
} from '../home/style'

const PropertiesComponent = () => {
  const data = useStaticQuery(query)
  const properties = data.markdownRemark.frontmatter.properties.property
  return (
    <PropertiesContainer>
      {properties.map(property => (
        <PropertyContainer to={`/property/${property.slug}`} key={property.id}>
          <GatsbyImage
            image={getImage(property.image.childImageSharp.gatsbyImageData)}
            alt={property.title}
            style={{
              width: '100%',
              height: '373px',
              borderRadius: '34px',
            }}
          />
          <PropertyDescription>
            <div>
              <PropertyTitle>{property.title}</PropertyTitle>
              <PropertyLocation>{property.location}</PropertyLocation>
            </div>
            <PropertyPrice>{property.price}</PropertyPrice>
          </PropertyDescription>
        </PropertyContainer>
      ))}
    </PropertiesContainer>
  )
}

export default PropertiesComponent

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
            slug
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
