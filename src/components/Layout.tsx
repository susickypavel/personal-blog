import React, { Fragment } from "react"
import { Global } from "@emotion/core"

import Seo from "@components/Seo"
import globalStyles from "@css/global-styles"
import resetStyles from "@css/reset-styles"

interface Props {
  title?: string
}

const Layout: React.FC<Props> = ({ children, title = "Blog" }) => {
  return (
    <Fragment>
      <Seo title={title} />
      <Global styles={[globalStyles, resetStyles]} />
      {children}
    </Fragment>
  )
}

export default Layout
