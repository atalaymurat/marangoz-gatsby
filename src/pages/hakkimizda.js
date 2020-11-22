import React from "react"
import { Link, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Hakkimizda = ( props ) => (
		<BackgroundImage
			fluid={props.data.indexImage.childImageSharp.fluid}
			
	>
  <Layout>
    <SEO title="Marangozi.com hakkinda" />
    <Link to="/">geri</Link>
	<div>

    <h1>Hakkimizda</h1>
		<h2>Tarihce</h2>
		<h2>Neden Ahsap</h2>
	</div>
  </Layout>
		</BackgroundImage>
)

export default Hakkimizda

export const pageQuerry = graphql`
	query {
		indexImage: file(relativePath: { eq: "panjur02.jpg"}) {
		childImageSharp {
			fluid(maxWidth: 960){
				...GatsbyImageSharpFluid
			}
		}
		}
	}
`