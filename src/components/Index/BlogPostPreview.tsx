import React from "react"

import { MarkdownRemark } from "../../generated/graphql"

interface Props {
  post: MarkdownRemark
}

const BlogPostPreview: React.FC<Props> = ({
  post: {
    frontmatter: { title }
  }
}) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}

export default BlogPostPreview
