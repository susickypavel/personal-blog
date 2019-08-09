import React from "react"
import { Link } from "gatsby"
import { FluidObject } from "gatsby-image"

import { MarkdownRemark, ImageSharpFluid } from "@generated/graphql.d"
import { formatDate } from "@utils/index"
import { createPostPath } from "@utils/index"
import {
  BlogPostPreviewThumbnail,
  BlogPostPreviewHolder,
  BlogPostPreviewHeadline,
  BlogPostPreviewDate,
  BlogPostPreviewReadMoreButton,
  BlogPostPreviewBody,
  BlogPostPreviewBodyText
} from "./__styles__"

interface Props {
  post: MarkdownRemark
  thumbnail: ImageSharpFluid
}

const BlogPostPreview: React.FC<Props> = ({
  post: {
    fields: { slug },
    frontmatter: { title, uploadDate }
  },
  thumbnail
}) => {
  return (
    <BlogPostPreviewHolder>
      <BlogPostPreviewThumbnail fluid={thumbnail as FluidObject} />
      <BlogPostPreviewBody>
        <BlogPostPreviewBodyText>
          <BlogPostPreviewHeadline>{title}</BlogPostPreviewHeadline>
          <BlogPostPreviewDate>{formatDate(uploadDate)}</BlogPostPreviewDate>
        </BlogPostPreviewBodyText>
        <BlogPostPreviewReadMoreButton to={createPostPath(slug)}>Read more</BlogPostPreviewReadMoreButton>
      </BlogPostPreviewBody>
    </BlogPostPreviewHolder>
  )
}

export default BlogPostPreview
