import React, { useState } from "react"
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
  BlogPostPreviewUpper
} from "./__styles__"

interface Props {
  post: MarkdownRemark
  thumbnail: ImageSharpFluid
}

const BlogPostPreview: React.FC<Props> = ({
  post: {
    fields: { slug },
    frontmatter: { title, uploadDate },
    timeToRead
  },
  thumbnail
}) => {
  const [hovered, setHover] = useState(false)
  const postUrl = createPostPath(slug)

  const onLinkHover = () => setHover(true)
  const onLinkLeave = () => setHover(false)

  return (
    <BlogPostPreviewHolder>
      <BlogPostPreviewUpper>
        <Link to={postUrl} onMouseEnter={onLinkHover} onMouseLeave={onLinkLeave}>
          <BlogPostPreviewThumbnail fluid={thumbnail as FluidObject} />
        </Link>
        <BlogPostPreviewBody selected={hovered}>
          <BlogPostPreviewHeadline>{title}</BlogPostPreviewHeadline>
          <BlogPostPreviewDate>
            {formatDate(uploadDate)} - {timeToRead} min read
          </BlogPostPreviewDate>
        </BlogPostPreviewBody>
      </BlogPostPreviewUpper>
      <BlogPostPreviewReadMoreButton to={postUrl} onMouseEnter={onLinkHover} onMouseLeave={onLinkLeave}>
        Read more
      </BlogPostPreviewReadMoreButton>
    </BlogPostPreviewHolder>
  )
}

export default BlogPostPreview
