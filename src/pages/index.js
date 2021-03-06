import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Ahsap Panjur Sistemleri" />
    <Link to="/hakkimizda/">Hakkimizda</Link> <br />
    <h1>Ahsap Panjur Sistemleri</h1>
    <h2>İç Mekan Panjur Uygulamaları</h2>
	<p>
	<Img 
		fluid={data.panjur01.childImageSharp.fluid} 
		alt="ic mekan acilir panjur uygulamasi"
	/>
	</p>
	<p>
	<Img 
		fluid={data.panjur02.childImageSharp.fluid} 
		alt="ic mekan ahsap mdf lake beyaz acilir panjur uygulamasi"
	/>
	</p>
  </Layout>
)

export default IndexPage

export const query = graphql`
query{
panjur01: file(relativePath:{eq:"panjur01.jpg"}) {
    id
    name
    childImageSharp {
      fluid(maxWidth: 1890) {
        ...GatsbyImageSharpFluid
      }
    }
  }
panjur02: file(relativePath:{eq:"panjur02.jpg"}) {
    id
    name
    childImageSharp {
      fluid(maxWidth: 1890) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}

`
