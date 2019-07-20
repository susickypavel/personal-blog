import React, { Fragment } from "react"
import Seo from "./Seo"

interface Props {
  title?: string
}

const Layout: React.FC<Props> = ({ children, title = "Blog" }) => {
  return (
    <Fragment>
      <Seo title={title} />
      {children}
    </Fragment>
  )
}

export default Layout
