import React from "react"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"

import Nav from "./nav"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    let header

    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        {title}
      </h1>
    )
    return (
      <Wrapper>
        <div
          style={{
            gridColumn: "1 / -1",
          }}
        >
          <header>{header}</header>
          <Nav />
          <main>{children}</main>
        </div>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 8px;
  grid-row-gap: 12px;
  max-width: ${rhythm(24)};
  margin: 0 auto;
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
  grid-column: 1 / -1;
`

export default Layout
