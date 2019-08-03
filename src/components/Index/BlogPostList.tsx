import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import BlogPostPreview from "@components/Index/BlogPostPreview"
import { Query } from "@generated/graphql.d"

const BlogPostList: React.FC = () => {
  const { allMarkdownRemark } = useStaticQuery<Query>(graphql`
    query Posts {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              uploadDate
            }
            fields {
              slug
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
