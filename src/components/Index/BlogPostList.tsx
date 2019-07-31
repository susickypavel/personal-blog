import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import BlogPostPreview from "./BlogPostPreview"
import { Query } from "../../generated/graphql"

const BlogPostList: React.FC = () => {
  const { allMarkdownRemark } = useStaticQuery<Query>(graphql`
    query Posts {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      {allMarkdownRemark.edges.map(({ node }) => (
        <BlogPostPreview key={node.frontmatter.title} post={node} />
      ))}
    </div>
  )
}

export default BlogPostList
