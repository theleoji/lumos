import React from "react"
import { Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class PageTemplate extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const page = this.props.data.mdx

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={page.frontmatter.title}
          description={page.frontmatter.description || page.excerpt}
        />
        <h1>{page.frontmatter.title}</h1>
        <MDXRenderer>{page.body}</MDXRenderer>
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
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
