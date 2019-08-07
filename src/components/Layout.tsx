import React from "react"
import { Global } from "@emotion/core"

import Seo, { CustomSiteMetaData } from "@components/Seo"

import globalStyles from "@css/global-styles"
import resetStyles from "@css/reset-styles"

import { SocialMediaProvider } from "@services/social-media-service"

interface Props {
  title?: string
  customMetaData?: CustomSiteMetaData
}

const Layout: React.FC<Props> = ({ children, title = "Blog", customMetaData = {} }) => {
  console.log(process.env.BASE_URL)
  return (
    <SocialMediaProvider>
      <Seo title={title} metaData={customMetaData} />
      <Global styles={[globalStyles, resetStyles]} />
      {children}
    </SocialMediaProvider>
  )
}

export default Layout
