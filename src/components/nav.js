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
            external_link
            path
          }
        }
      }
    }
  }
`

const Link = ({ ...props }) => (
  <GatsbyLink activeClassName="current-page" {...props} />
)

const StyleALink = component => styled(component)`
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

const StyledInternalLink = StyleALink(Link)
const StyledExternalLink = StyleALink("a")

const NavItem = ({ page }) => {
  if (page.node.frontmatter.external_link) {
    // if external link is defined, return an external link
    return (
      <StyledExternalLink href={page.node.frontmatter.external_link}>
        {page.node.frontmatter.title}
      </StyledExternalLink>
    )
  } else {
    // else, return an internal link
    return (
      <StyledInternalLink to={page.node.frontmatter.path}>
        {page.node.frontmatter.title}
      </StyledInternalLink>
    )
  }
}

const Nav = ({ ...props }) => {
  const {
    allMdx: { edges },
  } = useStaticQuery(NavQuery)
  const pages = edges

  return (
    <nav {...props}>
      {pages.map(page => (
        <React.Fragment key={page.node.fields.slug}>
          <NavItem page={page} />{" "}
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
