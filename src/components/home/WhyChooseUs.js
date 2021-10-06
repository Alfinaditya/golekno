import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  BadgeCheckIcon,
  UsersGroupIcon,
  CurrencyDollarIcon,
  CursorClickIcon,
  WhyChooseUsImage,
  WhyChooseUsReasons,
  WhyChooseUsSection,
  WhyChooseUsTitle,
  WhyChooseUsReasonTitle,
  WhyChooseUsReasonDescription,
  ReasonOne,
  ReasonTwo,
} from '../../styles/Home'

const WhyChooseUs = () => {
  const data = useStaticQuery(query)
  const whyChooseUs = data.markdownRemark.frontmatter.whyChooseUs
  const icon_1 = [<UsersGroupIcon />, <CurrencyDollarIcon />]
  const icon_2 = [<BadgeCheckIcon />, <CursorClickIcon />]
  return (
    <WhyChooseUsSection>
      <WhyChooseUsImage>
        <GatsbyImage
          image={getImage(whyChooseUs.image.childImageSharp.gatsbyImageData)}
          alt={whyChooseUs.title}
          style={{ width: '100%', height: '100%', borderRadius: '34px' }}
        />
      </WhyChooseUsImage>
      <WhyChooseUsReasons>
        <WhyChooseUsTitle>{whyChooseUs.title}</WhyChooseUsTitle>

        <ReasonOne>
          {whyChooseUs.reason_1.map((reason, i) => (
            <div key={reason.id}>
              {icon_1[i]}
              <WhyChooseUsReasonTitle>{reason.title}</WhyChooseUsReasonTitle>
              <WhyChooseUsReasonDescription>
                {reason.description}
              </WhyChooseUsReasonDescription>
            </div>
          ))}
        </ReasonOne>

        <ReasonTwo>
          {whyChooseUs.reason_2.map((reason, i) => (
            <div key={reason.id}>
              {icon_2[i]}
              <WhyChooseUsReasonTitle>{reason.title}</WhyChooseUsReasonTitle>
              <WhyChooseUsReasonDescription>
                {reason.description}
              </WhyChooseUsReasonDescription>
            </div>
          ))}
        </ReasonTwo>
      </WhyChooseUsReasons>
    </WhyChooseUsSection>
  )
}
const query = graphql`
  query WhyChooseUsQuery {
    markdownRemark(frontmatter: { name: { eq: "whyChooseUs" } }) {
      frontmatter {
        whyChooseUs {
          title
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          reason_1 {
            id
            title
            description
          }
          reason_2 {
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
