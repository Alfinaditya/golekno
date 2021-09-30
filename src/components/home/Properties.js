import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  PropertiesDescription,
  PropertiesTitle,
  PropertiesContainer,
  PropertyImage,
  PropertyTitle,
  PropertyLocation,
  PropertyPrice,
  PropertiesLink,
  PropertiesSection,
  PropertyDescription,
  PropertyContainer,
} from './style'
import 'swiper/css'
const Properties = () => {
  const data = useStaticQuery(query)
  const properties = data.markdownRemark.frontmatter.properties
  return (
    <PropertiesSection>
      <PropertiesTitle>Find your best place</PropertiesTitle>
      <PropertiesDescription>
        From apartment to exclusive mansion
      </PropertiesDescription>
      <PropertiesContainer>
        <Swiper slidesPerView={4}>
          {properties.property.map(property => (
            <SwiperSlide>
              <PropertyContainer key={property.id}>
                <PropertyImage>
                  <GatsbyImage
                    image={getImage(
                      property.image.childImageSharp.gatsbyImageData
                    )}
                    alt={property.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '34px',
                    }}
                  />
                </PropertyImage>
                <PropertyDescription>
                  <div>
                    <PropertyTitle>{property.title}</PropertyTitle>
                    <PropertyLocation>{property.location}</PropertyLocation>
                  </div>
                  <PropertyPrice>{property.price}</PropertyPrice>
                </PropertyDescription>
              </PropertyContainer>
            </SwiperSlide>
          ))}
        </Swiper>
      </PropertiesContainer>
      <PropertiesLink to={properties.ctaLink}>
        {properties.ctaText}
      </PropertiesLink>
    </PropertiesSection>
  )
}

const query = graphql`
  query PropertiesQuery {
    markdownRemark(frontmatter: { name: { eq: "properties" } }) {
      frontmatter {
        properties {
          title
          description
          ctaText
          ctaLink
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
