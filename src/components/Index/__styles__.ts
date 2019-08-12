import styled from "@emotion/styled"

import Img from "gatsby-image"
import { Link } from "gatsby"
import { BackgroundFlowAnimation } from "@css/animations-styles"
import {
  BLOGPOSTPREVIEW_MAXWIDTH,
  BLOGPOSTPREVIEW_MQ_PADDING,
  BLOGPOSTPREVIEW_MARGIN,
  BLOGPOSTPREVIEWUPPER_MARGINBOTTOM,
  BLOGPOSTPREVIEWUPPER_BORDERRADIUS,
  BLOGPOSTPREVIEWUPPER_BOXSHADOW,
  BLOGPOSTPREVIEWBODY_BG_HOVERED,
  BLOGPOSTPREVIEWBODY_BG,
  BLOGPOSTPREVIEWBODY_PADDING,
  BLOGPOSTPREVIEWHEADLINE_FONTSIZE,
  BLOGPOSTPREVIEWHEADLINE_MARGINBOTTOM,
  BLOGPOSTPREVIEWDATE_FONTSIZE,
  BLOGPOSTPREVIEWREADMORE_BORDERRADIUS,
  BLOGPOSTPREVIEWREADMORE_PADDING,
  BLOGPOSTPREVIEWREADMORE_WIDTH,
  BLOGPOSTPREVIEWREADMORE_FONTSIZE
} from "@css/constants"

export const BlogPostPreviewHolder = styled.div`
  width: 100%;
  max-width: ${BLOGPOSTPREVIEW_MAXWIDTH};
  margin-bottom: ${BLOGPOSTPREVIEW_MARGIN};

  @media (max-width: ${BLOGPOSTPREVIEW_MAXWIDTH}) {
    padding: ${BLOGPOSTPREVIEW_MQ_PADDING};
  }
`

export const BlogPostPreviewUpper = styled.div`
  margin-bottom: ${BLOGPOSTPREVIEWUPPER_MARGINBOTTOM};
  border-radius: ${BLOGPOSTPREVIEWUPPER_BORDERRADIUS};
  overflow: hidden;
  box-shadow: ${BLOGPOSTPREVIEWUPPER_BOXSHADOW};
`

export const BlogPostPreviewBody = styled.div<{ selected: boolean }>`
  background: ${props => {
    return props.selected ? BLOGPOSTPREVIEWBODY_BG_HOVERED : BLOGPOSTPREVIEWBODY_BG
  }};
  background-size: 1000% 1000%;
  padding: ${BLOGPOSTPREVIEWBODY_PADDING};
  display: flex;
  flex-flow: column wrap;
  align-items: center;

  animation: ${BackgroundFlowAnimation} 5s ease infinite;
`

export const BlogPostPreviewHeadline = styled.h2`
  font-size: ${BLOGPOSTPREVIEWHEADLINE_FONTSIZE};
  margin-bottom: ${BLOGPOSTPREVIEWHEADLINE_MARGINBOTTOM};
`
export const BlogPostPreviewDate = styled.p`
  font-size: ${BLOGPOSTPREVIEWDATE_FONTSIZE};
`
export const BlogPostPreviewReadMoreButton = styled(Link)`
  display: block;
  border-radius: ${BLOGPOSTPREVIEWREADMORE_BORDERRADIUS};
  padding: ${BLOGPOSTPREVIEWREADMORE_PADDING};
  margin: 0 auto;
  width: ${BLOGPOSTPREVIEWREADMORE_WIDTH};
  text-align: center;
  background-color: #8c1eff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: ${BLOGPOSTPREVIEWREADMORE_FONTSIZE};
  font-weight: 700;
  color: white;

  &:hover {
    opacity: 0.8;
  }
`

export const BlogPostPreviewThumbnail = styled(Img)``

export const BlogPostListHolder = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`
