import styled from "@emotion/styled"

import Img from "gatsby-image"
import { Link } from "gatsby"
import { BackgroundFlowAnimation } from "@css/animations-styles"

export const BlogPostPreviewHolder = styled.div`
  max-width: 500px;
`

export const BlogPostPreviewUpper = styled.div`
  margin-bottom: 8px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
`

export const BlogPostPreviewBody = styled.div<{ selected: boolean }>`
  background: ${props => {
    return props.selected ? "linear-gradient(219deg, #8c1eff, #f222ff, #ff2975, #f222ff, #8c1eff)" : "#f222ff"
  }};
  background-size: 1000% 1000%;
  padding: 8px;
  display: flex;
  flex-flow: column wrap;
  align-items: center;

  animation: ${BackgroundFlowAnimation} 5s ease infinite;
`

export const BlogPostPreviewHeadline = styled.h2`
  font-size: 2.6rem;
  margin-bottom: 8px;
`
export const BlogPostPreviewDate = styled.p`
  font-size: 1.4rem;
`
export const BlogPostPreviewReadMoreButton = styled(Link)`
  display: block;
  border-radius: 4px;
  padding: 8px;
  margin: 0 auto;
  width: 120px;
  text-align: center;
  background-color: #8c1eff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 700;
  color: white;

  &:hover {
    opacity: 0.8;
  }
`

export const BlogPostPreviewThumbnail = styled(Img)``
