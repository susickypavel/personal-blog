import styled from "@emotion/styled"

import Img from "gatsby-image"
import { Link } from "gatsby"

export const BlogPostPreviewHolder = styled.div`
  max-width: 500px;
  padding: 8px;
  margin: 8px;
  border: 1px solid black;
`

export const BlogPostPreviewBody = styled.div`
  background: red;
  padding: 8px;

  display: flex;
  align-items: center;
`

export const BlogPostPreviewBodyText = styled.div`
  flex-grow: 1;
`

export const BlogPostPreviewHeadline = styled.h2`
  font-size: 2.6rem;
`
export const BlogPostPreviewDate = styled.p`
  font-size: 1.4rem;
`
export const BlogPostPreviewReadMoreButton = styled(Link)`
  font-size: 1.4rem;
  background: blue;
  padding: 8px;

  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  color: white;

  border-radius: 4px;
`

export const BlogPostPreviewThumbnail = styled(Img)``
