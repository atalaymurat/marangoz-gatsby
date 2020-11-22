import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Marangozi.com" />
    <Link to="/">geri</Link>
    <h1>Page-2</h1>
  </Layout>
)

export default SecondPage
