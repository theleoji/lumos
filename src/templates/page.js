import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"

class PageTemplate extends React.Component {
  render() {
    const page = this.props.data.mdx

    return (
      <Layout location={this.props.location}>
        <SEO
          title={page.frontmatter.title}
          description={page.frontmatter.description || page.excerpt}
        />
        {this.props.location.pathname === "/" ? null : (
          <h1>{page.frontmatter.title}</h1>
        )}
        <MDXRenderer>{page.body}</MDXRenderer>
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        description
      }
    }
  }
`
