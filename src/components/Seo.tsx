import React from "react"
import { Helmet as Head } from "react-helmet"

interface Props {
  title: string
}

const Seo: React.FC<Props> = ({ title }) => {
  return (
    <Head titleTemplate="%s | Paul from Czech" htmlAttributes={{ lang: "en" }}>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  )
}

export default Seo
