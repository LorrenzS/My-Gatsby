import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1>
        <Link
          to="/"
          className="header-link"
        >
          {siteTitle}
        </Link>
      </h1>
      <div className="nav">
        <AniLink className="nav-link" fade duration={.6} to="/about-me">About Me</AniLink>
        <AniLink className="nav-link" fade duration={.6} to="/blog-list">Blog</AniLink>
        <AniLink className="nav-link" fade duration={.6} to="/contact">Contact</AniLink>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
