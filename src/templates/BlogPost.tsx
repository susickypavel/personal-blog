import React from "react"

import { MarkdownRemark } from "@generated/graphql.d"

interface Props {
  pageContext: {
    node: MarkdownRemark
  }
}

const BlogPost: React.FC<Props> = ({ pageContext: { node } }) => {
  return (
    <div>
      <h1>{node.frontmatter.title}</h1>
    </div>
  )
}

export default BlogPost
