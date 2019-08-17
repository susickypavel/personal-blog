import styled from "@emotion/styled"

import { BLOGPOSTPREVIEW_MAXWIDTH, PRIMARY_COLOR } from "@css/constants"

export const Input = styled.input`
  width: 100%;
  max-width: ${BLOGPOSTPREVIEW_MAXWIDTH};
  margin: 16px 0;
  padding: 8px;
  outline: none;
  font-size: 1.6rem;
  color: gray;
  border: 1px solid ${PRIMARY_COLOR};
`

export const SearchingState = styled.div`
  width: 100%;
  text-align: center;
  font-size: 2.4rem;
`
