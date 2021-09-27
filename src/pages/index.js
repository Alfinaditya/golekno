import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

export default function Home({ data }) {
  const dataHome = data
  console.log(dataHome)
  return (
    <div>
      <Layout>
        <div>Alfin world here</div>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query MyQuery {
    markdownRemark {
      frontmatter {
        hero {
          title
          description
        }
        whyChooseUs {
          title
          reasons {
            id
            title
            description
          }
        }
        properties {
          title
          description
        }
        reviews {
          name
          job
          review
        }
        content_1 {
          title
          description
        }
        content_2 {
          title
          description
          ctaText
          ctaLink
        }
        reviews {
          id
          name
          job
          review
        }
        newsLetter {
          title
          ctaText
        }
        footer
      }
    }
  }
`
