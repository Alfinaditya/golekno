import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { navigate } from '@reach/router'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  ContentDescription,
  ContentImage,
  ContentOne,
  ContentTwo,
  ContentsSection,
  ContentText,
  ContentTitle,
  ContentButton,
} from '../../styles/home/Contents'

const Contents = () => {
  const data = useStaticQuery(query)
  const contents = data.markdownRemark.frontmatter
  return (
    <ContentsSection>
      <ContentOne>
        <ContentImage>
          <GatsbyImage
            image={getImage(
              contents.content_1.image.childImageSharp.gatsbyImageData
            )}
            alt={contents.content_1.title}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '13px',
            }}
          />
        </ContentImage>
        <ContentText>
          <ContentTitle>{contents.content_1.title}</ContentTitle>
          <ContentDescription>
            {contents.content_1.description}
          </ContentDescription>
        </ContentText>
      </ContentOne>

      <ContentTwo>
        <ContentText>
          <ContentTitle>{contents.content_2.title}</ContentTitle>
          <ContentDescription>
            {contents.content_2.description}
          </ContentDescription>
          <ContentButton onClick={() => navigate('/properties')}>
            {contents.content_2.ctaText}
          </ContentButton>
        </ContentText>
        <ContentImage>
          <GatsbyImage
            image={getImage(
              contents.content_2.image.childImageSharp.gatsbyImageData
            )}
            alt={contents.content_1.title}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '13px',
            }}
          />
        </ContentImage>
      </ContentTwo>
    </ContentsSection>
  )
}

export default Contents

const query = graphql`
  query ContentQuery {
    markdownRemark(frontmatter: { name: { eq: "content" } }) {
      frontmatter {
        content_1 {
          description
          title
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        content_2 {
          ctaLink
          ctaText
          description
          title
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
