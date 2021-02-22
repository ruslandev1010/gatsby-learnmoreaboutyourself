import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
// import Wrapper from '../components/Wrapper'
// import Hero from '../components/Hero'
import PostsList from '../components/PostsList'
// import Pagination from '../components/Pagination'
import SEO from '../components/SEO'

const Wrapper = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0px auto 30px auto;
  padding: 50px;
  min-height: 65vh;

  @media (max-width: 780px) {
    width: 100%;
    padding: 25px;
  }
`

class BlogList extends React.Component {
  render() {
    const { title, description } = this.props.data.site.siteMetadata
    const posts = this.props.data.posts.edges
    const { pageContext } = this.props

    return (
      <Layout location={this.props.location}>
        <SEO />
        
        <Wrapper>
          <PostsList posts={posts} />
        </Wrapper>
      </Layout>
    )
  }
}

export default BlogList

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    posts: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "//content/posts//" }
        frontmatter: { published: { ne: false }, unlisted: { ne: true } }
      }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            language
            slug
            cover {
              publicURL
            }
            imageShare {
              publicURL
            }
            translations {
              language
              link
              hreflang
            }
          }
        }
      }
    }
  }
`
