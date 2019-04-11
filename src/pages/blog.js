import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link, graphql } from 'gatsby'

const BlogPage = ({ data }) => {
  const blogPosts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Blog" keywords={[`blog`]} />
      <ol className="f4 f3-ns lh-copy mv5">
        {
          blogPosts.map(({ node }) => {
            const { excerpt, frontmatter } = node
            return (
              <li key={frontmatter.path} className="mv5-l mv4">
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
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
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
  }
`
