import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Reviews = () => {
  const data = useStaticQuery(query)
  const reviews = data.markdownRemark.frontmatter.reviews
  return (
    <div>
      {reviews.map(review => (
        <div key={review.id}>
          <p>{review.name}</p>
          <p>{review.job}</p>
          <p>{review.message}</p>
        </div>
      ))}
    </div>
  )
}
const query = graphql`
  query ReviewsQuery {
    markdownRemark(frontmatter: { name: { eq: "reviews" } }) {
      frontmatter {
        reviews {
          id
          name
          job
          message
        }
      }
    }
  }
`

export default Reviews
