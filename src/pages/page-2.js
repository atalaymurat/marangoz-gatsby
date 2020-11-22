import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Hakkimizda" />
    <h1>Hakkimizda#page2</h1>
    <Link to="/">geri</Link>
  </Layout>
)

export default SecondPage
