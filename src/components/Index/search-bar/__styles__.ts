import styled from "@emotion/styled"

import { BLOGPOSTPREVIEW_MAXWIDTH, PRIMARY_COLOR } from "@css/constants"

export const InputHolder = styled.div`
  width: 100%;
  position: relative;
  margin: 16px 0;
`

export const ClearButton = styled.button`
  padding: 0;

  height: 25px;
  width: 25px;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 12px;

  height: 25px;
  width: 25px;
  border-radius: 100%;

  border: none;
  outline: none;

  font-size: 24px;

  &:hover {
    cursor: pointer;
    background: pink;
  }

  &:focus {
    background: red;
  }

  & svg {
    height: 12.5px;
    width: 12.5px;
    padding: calc(12.5 / 2);
  }
`

export const Input = styled.input`
  width: 100%;
  max-width: ${BLOGPOSTPREVIEW_MAXWIDTH};
  padding: 8px;
  padding-right: 44px;
  outline: none;
  font-size: 1.6rem;
  color: gray;
  border: 3px solid ${PRIMARY_COLOR};
  border-radius: 4px;
`

export const SearchingState = styled.div`
  width: 100%;
  text-align: center;
  font-size: 2.4rem;
`
