import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const HeaderQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const Header = () => {
  const {
    site: {
      siteMetadata: { title, description },
    },
  } = useStaticQuery(HeaderQuery)

  return (
    <header>
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1),
          marginTop: 0,
        }}
      >
        {title}
      </h1>
      <h2
        style={{
          ...scale(0.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
          fontWeight: "normal",
        }}
      >
        {description}
      </h2>
    </header>
  )
}

export default Header
