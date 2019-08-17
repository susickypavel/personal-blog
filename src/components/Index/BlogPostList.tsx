import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import BlogPostPreview from "@components/Index/BlogPostPreview"
import SearchBar from "@components/Index/search-bar/SearchBar"
import { Query } from "@generated/graphql.d"
import { getThumbnailForPost } from "@utils/getThumbnailForPost"

import { BlogPostListHolder, NoBlogPost } from "./__styles__"
import { postFilter } from "@utils/posts-filtering"

const BlogPostList: React.FC = () => {
  const [filtered, setFiltered] = useState(null)

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

  const filteredPosts = allMarkdownRemark.edges.filter(edge => postFilter(edge, filtered))

  return (
    <BlogPostListHolder>
      <SearchBar setFiltered={setFiltered}>
        {filteredPosts.length === 0 ? (
          <NoBlogPost>Couldn't find a post</NoBlogPost>
        ) : (
          filteredPosts.map(({ node }) => {
            const {
              node: { fluid }
            } = getThumbnailForPost(edges, node.frontmatter.thumbnail)
            return <BlogPostPreview key={node.frontmatter.title} post={node} thumbnail={fluid} />
          })
        )}
      </SearchBar>
    </BlogPostListHolder>
  )
}

export default BlogPostList
