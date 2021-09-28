import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const WhyChooseUs = () => {
  const data = useStaticQuery(query)
  const whyChooseUs = data.markdownRemark.frontmatter.whyChooseUs
  return (
    <div>
      <h1>{whyChooseUs.title}</h1>
      {whyChooseUs.reasons.map(reason => (
        <div key={reason.id}>
          <h1>{reason.title}</h1>
          <p>{reason.description}</p>
        </div>
      ))}
    </div>
  )
}
const query = graphql`
  query WhyChooseUsQuery {
    markdownRemark(frontmatter: { name: { eq: "whyChooseUs" } }) {
      frontmatter {
        whyChooseUs {
          title
          reasons {
            id
            title
            description
          }
        }
      }
    }
  }
`

export default WhyChooseUs
