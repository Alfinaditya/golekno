import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

const Hero = () => {
  return <div>Hero</div>
}
// query MyQuery {
//   markdownRemark(frontmatter: {name: {eq: "hero"}}) {
//     frontmatter {
//       hero {
//         title
//         description
//       }
//     }
//   }
// }

export default Hero
