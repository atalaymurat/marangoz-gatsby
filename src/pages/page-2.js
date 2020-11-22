import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Hakkimizda" />
    <Link to="/">geri</Link>
    <h1>Hakkimizda#page2</h1>
  </Layout>
)

export default SecondPage
