import React from 'react'
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import {
  PropertiesContainer,
  PropertiesImage,
  PropertyContainer,
} from '../styles/Properties'
import GotoTopButton from '../components/GotoTopButton'
import {
  PropertyDescription,
  PropertyPrice,
  PropertyTitle,
  PropertyLocation,
} from '../styles/home/Properties'
import Seo from '../components/Seo'

const Properties = ({ data }) => {
  const properties = data.markdownRemark.frontmatter.properties.property
  return (
    <div>
      <Layout>
        <Seo title='Properties' />
        <PropertiesContainer>
          {properties.map(property => (
            <PropertyContainer
              to={`/property/${property.slug}`}
              key={property.id}
            >
              <PropertiesImage>
                <GatsbyImage
                  image={getImage(
                    property.image.childImageSharp.gatsbyImageData
                  )}
                  alt={property.title}
                  imgStyle={{
                    objectFit: 'cover',
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '34px',
                  }}
                />
              </PropertiesImage>
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
        <GotoTopButton />
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
