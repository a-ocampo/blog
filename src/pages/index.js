import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  const blogPosts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Home" keywords={[`home`]} />
      <div className="mv5">
        <Img className="fl mr3 mr4-m mr5-l mb3 mb4-m mb5-l" fixed={data.file.childImageSharp.fixed} />
        <p>
          Hey!<br /><br />
          Im Alexis Ocampo...
        </p>
        <section className="f4 f3-ns lh-copy mv5 pt4">
          <h2 className="f3 f2-l underline fw6 lh-title">Recent blog posts:</h2>
          <ol>
            {
              blogPosts.slice(0, 4).map(({ node }) => {
                const { excerpt, frontmatter } = node
                return (
                  <li key={frontmatter.path} className="mvb-l mb4 mt3 mt4-l">
                    <Link to={frontmatter.path} className="link dim mb3">
                      <div className="fw6 pr3">
                        {frontmatter.title}
                      </div>
                      <div className="f5">
                        {frontmatter.date}
                      </div>
                      <div>{excerpt}</div>
                    </Link>
                  </li>
                )
              })
            }
          </ol>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
    file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
