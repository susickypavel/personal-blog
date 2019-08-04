import React from "react"

import { MarkdownRemark } from "@generated/graphql.d"
import { formatDate } from "@utils/index"
import Layout from "@components/Layout"

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
    <Layout
      title={title}
      customMetaData={{ customTitle: title, customDescription: `Uploaded ${formatDate(uploadDate)}` }}
    >
      <h1>{title}</h1>
      <p>{formatDate(uploadDate)}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default BlogPost
