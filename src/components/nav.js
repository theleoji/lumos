import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import gray from "gray-percentage"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

const NavQuery = graphql`
  query NavQuery {
    allMdx(
      filter: { frontmatter: { show_nav: { eq: true } } }
      limit: 10
      sort: { order: ASC, fields: frontmatter___nav_order }
    ) {
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
`

const Link = ({ ...props }) => (
  <GatsbyLink activeClassName="current-page" {...props} />
)

const StyledLink = styled(Link)`
  grid-column: span 2;
  box-shadow: 0 3px 0 0 ${gray(80)};
  color: black;
  &:not(:last-of-type) {
    margin-right: ${rhythm(0.5)};
  }
  &:hover {
    color: gray;
    box-shadow: none;
  }
  &.current-page {
    box-shadow: 0 3px 0 0 ${gray(20)};
  }
`

const Nav = ({ ...props }) => {
  const {
    allMdx: { edges },
  } = useStaticQuery(NavQuery)
  const pages = edges

  return (
    <nav {...props}>
      {pages.map(page => (
        <React.Fragment key={page.node.fields.slug}>
          <StyledLink to={page.node.fields.slug}>
            {page.node.frontmatter.title}
          </StyledLink>{" "}
        </React.Fragment>
      ))}
    </nav>
  )
}

const StyledNav = styled(Nav)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin-bottom: ${rhythm(2)};
`

export default StyledNav
