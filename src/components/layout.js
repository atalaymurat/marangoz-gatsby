/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className='app'>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
					flex: 1,
          margin: `0 auto`,
          maxWidth: 960,
					width: '100%',
          padding: `0 1.0875rem 1.45rem`,
					border: 'solid 2px red',
        }}
      >
        <main>{children}</main>
      </div>
        <footer style={{
					background: 'black', color:'white', width:'100%'
        }}>
         marangozi © {new Date().getFullYear()} 
        </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
