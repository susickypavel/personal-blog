import { css } from "@emotion/core"

export default css`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html,
  body,
  #___gatsby,
  #___gatsby > * {
    width: 100%;
    height: 100%;
  }
`
