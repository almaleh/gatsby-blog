import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{post.frontmatter.title}</title>
        <description />
        <link rel="canonical" href="https://gatsby-far-flung-teeth.surge.sh/" />
        <meta
          name="description"
          content={`This is a blog post about ${post.frontmatter.title}`}
        />
        <meta name="keywords" content="Gatsby, JavaScript, ES6" />
        <meta name="author" content="Besher Al Maleh" />
      </Helmet>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
