import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"

import styled from "styled-components"

const Nav = data => {
  const pages = data.allMdx.edges

  return (
    <nav>
      {pages.map(page => (
        <React.Fragment key={page.node.fields.slug}>
          <Link to={page.node.fields.slug}>{page.node.frontmatter.title}</Link>{" "}
        </React.Fragment>
      ))}
    </nav>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      {
        allMdx(limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `}
    render={Nav}
  />
)
