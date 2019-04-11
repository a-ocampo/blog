import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <header className="cf mw8 center">
    <h1 className="fw6 fr-ns mb0 mt3 pt1 link near-black">
      <Link to="/">
        {siteTitle}
      </Link>
    </h1>
    <nav className="fl-ns mt3 pt3-ns">
      <Link to="/" activeClassName="bb bw1" className="b link dim pb1">Home</Link>
      <Link to="/blog" activeClassName="bb bw1" className="b link dim ml3 pb1">Blog</Link>
      <Link to="/about" activeClassName="bb bw1" className="b link dim ml3 pb1">About</Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired
}

export default Header
