import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const NewsLetter = () => {
  const data = useStaticQuery(query)
  const newsLetter = data.markdownRemark.frontmatter.newsLetter
  return (
    <div>
      <h1>{newsLetter.title}</h1>
      <button>{newsLetter.ctaText}</button>
    </div>
  )
}
const query = graphql`
  query NewsLetterQuery {
    markdownRemark(frontmatter: { name: { eq: "newsLetter" } }) {
      frontmatter {
        newsLetter {
          title
          ctaText
        }
      }
    }
  }
`

export default NewsLetter
