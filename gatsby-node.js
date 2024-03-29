const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: `posts` })

    createNodeField({
      node,
      name: "slug",
      value: slug
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              uploadDate
            }
            html
          }
        }
      }
    }
  `).then(result => {
    const { createPage } = actions
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: "/post" + node.fields.slug,
        component: path.resolve(`./src/templates/BlogPost.tsx`),
        context: {
          node
        }
      })
    })
  })
}
