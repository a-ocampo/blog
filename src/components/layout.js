import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import '../styles/reset.css'
import '../styles/tachyons.min.css'
import '../styles/utilities.css'

import Header from './header'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="sans-serif near-black mw9 center ph6-l ph4">
        <Header siteTitle={data.site.siteMetadata.title} />
        <main role="main">
          {children}
        </main>
        <footer className="tr pb2 pt5">
          <a className="b link dark-gray hover-hot-pink" href="https://www.linkedin.com/in/alexis-o-92297598/" target="_blank" rel="noopener noreferrer">@a-ocampo</a>
        </footer>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
