import React from "react"
import { Link } from "gatsby"

import { MarkdownRemark } from "@generated/graphql.d"
import { formatDate } from "@utils/index"
import { createPostPath } from "@utils/index"

interface Props {
  post: MarkdownRemark
}

const BlogPostPreview: React.FC<Props> = ({
  post: {
    fields: { slug },
    frontmatter: { title, uploadDate }
  }
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{formatDate(uploadDate)}</p>
      <Link to={createPostPath(slug)}>Read more</Link>
    </div>
  )
}

export default BlogPostPreview
