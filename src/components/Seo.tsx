import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet as Head } from "react-helmet"
import { Query } from "@generated/graphql.d"

interface Props {
  title: string
  metaData: Partial<CustomSiteMetaData>
}

export interface CustomSiteMetaData {
  customDescription?: string
  customTitle?: string
}

const Seo: React.FC<Props> = ({ title, metaData: { customDescription, customTitle } }) => {
  const {
    site: {
      siteMetadata: { description, twitter }
    }
  } = useStaticQuery<Query>(graphql`
    {
      site {
        siteMetadata {
          description
          twitter
        }
      }
    }
  `)

  return (
    <Head titleTemplate="%s | Paul from Czech" htmlAttributes={{ lang: "en" }}>
      <title>{customTitle || title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={customDescription || description} />

      <meta property="og:description" content={customDescription || description} />

      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:title" content={customTitle || title} />
      <meta name="twitter:description" content={customDescription || description} />
    </Head>
  )
}

export default Seo
