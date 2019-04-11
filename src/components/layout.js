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
      <div className="sans-serif green mw9 center ph6-l ph4 ba b--green bw3 min-vh-100 min-w-small">
        <Header siteTitle={data.site.siteMetadata.title} />
        <main role="main" className="near-black f4 f3-m f3-l lh-copy mw8 center">
          {children}
        </main>
        <footer className="tr pb2 pt5 mw8 center">
          <a className="b link dim" href="https://www.linkedin.com/in/alexis-o-92297598/" target="_blank" rel="noopener noreferrer">@a-ocampo</a>
        </footer>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
