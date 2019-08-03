import React from "react"

import { MarkdownRemark } from "@generated/graphql.d"
import { formatDate } from "@utils/index"

interface Props {
  pageContext: {
    node: MarkdownRemark
  }
}

const BlogPost: React.FC<Props> = ({ pageContext: { node } }) => {
  const {
    frontmatter: { title, uploadDate },
    html
  } = node

  return (
    <div>
      <h1>{title}</h1>
      <p>{formatDate(uploadDate)}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export default BlogPost
