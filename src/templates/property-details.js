import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { navigate } from 'gatsby-link'
import {
  CtaBack,
  PropertyDetailsContainer,
  PropertyDetailsLocation,
  PropertyDetailsReview,
  PropertyDetailsTitle,
  StarIcon,
  PropertyDetailsPrice,
  PropertyDetailsHeader,
  PropertyDetailsDescription,
} from './style'
import { ContentButton } from '../components/home/style'

const PropertyDetails = ({ data }) => {
  const propertyDetails = data.markdownRemark.frontmatter
  return (
    <Layout>
      <PropertyDetailsContainer>
        <GatsbyImage
          image={getImage(
            propertyDetails.image.childImageSharp.gatsbyImageData
          )}
          alt={propertyDetails.title}
          style={{
            width: '100%',
            height: '479px',
            borderRadius: '34px',
          }}
        />
        <PropertyDetailsHeader>
          <div>
            <PropertyDetailsTitle>{propertyDetails.title}</PropertyDetailsTitle>
            <PropertyDetailsLocation>
              {propertyDetails.location}
            </PropertyDetailsLocation>
            <PropertyDetailsReview>
              <StarIcon />
              <p>{propertyDetails.review}</p>
            </PropertyDetailsReview>
          </div>
          <PropertyDetailsPrice>{propertyDetails.price}</PropertyDetailsPrice>
        </PropertyDetailsHeader>
        <PropertyDetailsDescription>
          <p>{propertyDetails.description}</p>
          <ContentButton>Buy Now</ContentButton>
        </PropertyDetailsDescription>
        <CtaBack onClick={() => navigate(-1)}>Back</CtaBack>
      </PropertyDetailsContainer>
    </Layout>
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
        review
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
