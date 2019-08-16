import { MarkdownRemarkEdge } from "@generated/graphql.d"

export const postFilter = (edge: MarkdownRemarkEdge, searchedTerm: string) => {
  const searchedTermRegex = new RegExp(searchedTerm, "i")

  const { title } = edge.node.frontmatter

  return searchedTerm == null || searchedTermRegex.test(title)
}
