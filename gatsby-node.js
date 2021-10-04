const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const propertyDetailsTemplate = path.resolve(
    'src/templates/property-details.js'
  )
  const { data } = await graphql(`
    query PropertyDetailsQuery {
      allMarkdownRemark(filter: { frontmatter: { name: { eq: "property" } } }) {
        edges {
          node {
            frontmatter {
              id
              slug
            }
          }
        }
      }
    }
  `)
  data.allMarkdownRemark.edges.forEach(property => {
    actions.createPage({
      path: `/property/${property.node.frontmatter.slug}`,
      component: propertyDetailsTemplate,
      context: { id: property.node.frontmatter.id },
    })
  })
}
