import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import BlogPostPreview from "@components/Index/BlogPostPreview"
import { Query } from "@generated/graphql.d"
import { getThumbnailForPost } from "@utils/getThumbnailForPost"

import { BlogPostListHolder } from "./__styles__"

const BlogPostList: React.FC = () => {
  const {
    allMarkdownRemark,
    allImageSharp: { edges }
  } = useStaticQuery<Query>(graphql`
    query PostsWithThumbnails {
      allImageSharp {
        edges {
          node {
            fluid {
              originalName
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      allMarkdownRemark {
        edges {
          node {
            id
            timeToRead
            frontmatter {
              title
              uploadDate
              thumbnail
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
    <BlogPostListHolder>
      {allMarkdownRemark.edges.map(({ node }) => {
        const {
          node: { fluid }
        } = getThumbnailForPost(edges, node.frontmatter.thumbnail)
        return <BlogPostPreview key={node.frontmatter.title} post={node} thumbnail={fluid} />
      })}
    </BlogPostListHolder>
  )
}

export default BlogPostList
