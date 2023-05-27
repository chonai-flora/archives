/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ title, slug, children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const siteUrl = site.siteMetadata?.siteUrl
  const metaUrl = `${siteUrl}${slug}`
  const ogpSrc = `${siteUrl}/ogp.png`
  const metaTitle = slug ? `${title} | ${site.siteMetadata?.title}` : site.siteMetadata?.title

  return (
    <>
      <head prefix="og: https://ogp.me/ns#" />
      <title>{metaTitle}</title>
      <link rel="icon" href={`${siteUrl}/favicon.ico`} />
      <meta name="description" content={site.siteMetadata.description} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogpSrc} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:description" content={site.siteMetadata.description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:image" content={ogpSrc} />
      {children}
    </>
  )
}

export default Seo
