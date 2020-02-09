import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import styled from "styled-components"

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

const StyledLink = styled(Link)`
  color: black;
  box-shadow: none;
`

const Nav = ({ ...props }) => {
  const { allMdx } = useStaticQuery(NavQuery)

  const pages = allMdx.edges

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
  opacity: 0.5;
`

export default StyledNav
