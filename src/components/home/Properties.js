import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
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
} from '../../styles/Home'

import 'swiper/css'
import UseScreenSize from '../../hooks/UseScreenSize'
const Properties = () => {
  const data = useStaticQuery(query)
  const properties = data.markdownRemark.frontmatter.properties
  const { size } = UseScreenSize()
  const XXL = size.width >= '1876' ? 5 : false
  const XL = size.width <= '1876' ? 4 : false
  const L = size.width <= '1144' ? 3 : false
  const M = size.width <= '768' ? 2 : false
  const SLIDE_PREVIEW = M || L || XL || XXL
  return (
    <PropertiesSection>
      <PropertiesTitle>Find your best place</PropertiesTitle>
      <PropertiesDescription>
        From apartment to exclusive mansion
      </PropertiesDescription>
      <PropertiesContainer>
        <Swiper slidesPerView={SLIDE_PREVIEW}>
          {properties.property.map(property => (
            <SwiperSlide key={property.id}>
              <PropertyContainer to={`/property/${property.slug}`}>
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
export default Properties
