import React from "react"
import { Link } from "gatsby"
import Img, { FluidObject } from "gatsby-image"

import { MarkdownRemark, ImageSharpFluid } from "@generated/graphql.d"
import { formatDate } from "@utils/index"
import { createPostPath } from "@utils/index"

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
    <div>
      <Img fluid={thumbnail as FluidObject} />
      <h2>{title}</h2>
      <p>{formatDate(uploadDate)}</p>
      <Link to={createPostPath(slug)}>Read more</Link>
    </div>
  )
}

export default BlogPostPreview
