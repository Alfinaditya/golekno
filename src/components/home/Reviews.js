import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import quoteSVg from '../../svg/quote.svg'
import 'swiper/css'
import 'swiper/css/pagination'
import SwiperCore, { Pagination } from 'swiper'
import {
  ReviewContainer,
  ReviewJob,
  ReviewMessage,
  ReviewName,
  ReviewSection,
} from './style'

SwiperCore.use([Pagination])
const Reviews = () => {
  const data = useStaticQuery(query)
  const reviews = data.markdownRemark.frontmatter.reviews
  return (
    <ReviewSection>
      <Swiper
        autoplay={{ delay: 4000 }}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
      >
        {reviews.map(review => (
          <SwiperSlide key={review.id}>
            <ReviewContainer>
              <img src={quoteSVg} alt='quote' />
              <ReviewMessage>{review.message}</ReviewMessage>
              <GatsbyImage
                image={getImage(review.image.childImageSharp.gatsbyImageData)}
                alt={review.name}
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                }}
              />
              <ReviewName>{review.name}</ReviewName>
              <ReviewJob>{review.job}</ReviewJob>
            </ReviewContainer>
          </SwiperSlide>
        ))}
        <div>...</div>
      </Swiper>
    </ReviewSection>
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

export default Reviews
