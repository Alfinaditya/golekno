import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import {
  ErrorCtaLink,
  ErrorDescription,
  ErrorStatusNumber,
  ErrorContainer,
} from '../styles/404'

const NotFound = ({ data }) => {
  const error = data.markdownRemark.frontmatter
  return (
    <div>
      <Layout>
        <ErrorContainer>
          <ErrorStatusNumber>{error.name}</ErrorStatusNumber>
          <ErrorDescription>{error.description}</ErrorDescription>
          <ErrorCtaLink to={error.ctaLink}>{error.ctaText}</ErrorCtaLink>
        </ErrorContainer>
      </Layout>
    </div>
  )
}

export default NotFound
export const query = graphql`
  query ErrorQuery {
    markdownRemark(frontmatter: { name: { eq: "404" } }) {
      frontmatter {
        name
        description
        ctaText
        ctaLink
      }
    }
  }
`
