import * as React from "react"
import HomeText from "./../components/HomeText"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <HomeText />
  </Layout >
)

export default IndexPage
