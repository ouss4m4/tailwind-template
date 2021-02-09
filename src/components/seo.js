/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | Product Review` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <script>
        {`function bemobCb(params) {
          var t = params.trackingDomain+'/click/';
          var re = new RegExp(t+'?(\\d*)');
          var e = document.querySelectorAll('a[href*="'+t+'"]');
          for (var i = 0; i < e.length; i++) {
              var ex = re.exec(e[i].href);
              if (ex) {
                  e[i].href = params.ctaSecureUrl.replace('%%OFFER_NUMBER%%', ex[1] || 1);
              }
          }
        }`}
      </script>
      <script>
        {`!function(){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://o06vt.bemobtrcks.com/landing/82cac172-dde3-47b1-b318-8d836d59d463?callback=bemobCb&rule=1&path=1&landing=1&"+window.location.search.substring(1);var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)}();`}
      </script>
      <noscript>
        {`<img
          src="https://o06vt.bemobtrcks.com/landing/82cac172-dde3-47b1-b318-8d836d59d463?rule=1&path=1&landing=1"
          alt=""
        />`}
      </noscript>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
