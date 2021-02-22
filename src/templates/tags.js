import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import PostsList from '../components/PostsList'
import SEO from '../components/SEO'
import Hero from '../components/Hero'

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

class Tags extends React.Component {
  render() {
    const pageTitle = `#${this.props.pageContext.tag}`
    const posts = this.props.data.posts.edges

    return (
      <Layout location={this.props.location}>
        <SEO title={`Top blog posts on ${this.props.pageContext.tag}`} />
        <Hero title={pageTitle} />

        <Wrapper>
          <PostsList posts={posts} />
        </Wrapper>
      </Layout>
    )
  }
}

export default Tags

export const pageQuery = graphql`
  query PostsByTag($tag: String!) {
    posts: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          tags: { eq: $tag }
          published: { ne: false }
          unlisted: { ne: true }
        }
      }
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
