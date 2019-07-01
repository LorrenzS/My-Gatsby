/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header/header.js"
import './layout.scss'

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
    <div style={{minHeight: '100vh'}}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="main"
      >
        <main>{children}</main>
      </div>
      <footer>
        <div>
        ©{new Date().getFullYear()} Lorrenz Santiago. All Right Reserved. Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
        </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
