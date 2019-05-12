import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

export default ({ data }) => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>About</title>
      <link rel="canonical" href="https://gatsby-far-flung-teeth.surge.sh/" />
      <meta name="description" content="This is the About page" />
      <meta name="keywords" content="Gatsby, JavaScript, ES6" />
      <meta name="author" content="Besher Al Maleh" />
    </Helmet>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
      We're the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>

    <br />
    <p>(not really, I'm just testing Gatsby 😊)</p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
