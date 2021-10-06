import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {
  NewsLetterButton,
  NewsLetterContainer,
  NewsLetterInput,
  NewsLetterSection,
  NewsLetterTitle,
} from '../../styles/Home'

const NewsLetter = () => {
  const data = useStaticQuery(query)
  const newsLetter = data.markdownRemark.frontmatter.newsLetter
  return (
    <NewsLetterSection>
      <NewsLetterContainer>
        <NewsLetterTitle>{newsLetter.title}</NewsLetterTitle>
        <NewsLetterInput placeholder={'Enter your email'} type='text' />
        <NewsLetterButton>{newsLetter.ctaText}</NewsLetterButton>
      </NewsLetterContainer>
    </NewsLetterSection>
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
