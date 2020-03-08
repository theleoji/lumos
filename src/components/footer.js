import React from "react"
import styled from "styled-components"

const _footer = styled.footer`
  text-align: center;
  margin: 24px;
  grid-column: 1 / -1;
  font-style: italic;
`

const Footer = () => (
  // eslint-disable-next-line react/jsx-pascal-case
  <_footer>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </_footer>
)

export default Footer
