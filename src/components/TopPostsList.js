import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import useSiteMetadata from '../hooks/use-site-config'
import useSiteImages from '../hooks/use-site-images'
import TagList from './TagList'
import Flag from './Flag'
import { ReadingTime } from './Commons'

const CardsContainer = styled.aside`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 780px) {
    width: 100%;
    padding: 25px;
  }
`
const MainCard = styled.article`
  cursor: pointer;
  background-color: var(--color-primaryBetaBack);
  padding: 29px 63px 30px;
  img {
    height: 610px;
  }
  @media (min-width: 780px) {
  }
`
const CardCover = styled.div`
  img {
    width: 100%;
    height: auto;
    background: #c5d2d9 no-repeat 50%;
    background-size: cover;
    object-fit: cover;
    aspect-ratio: 1140/602;
  }
`

const CardContent = styled.div`
  padding: 5px 0 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  header {
    padding: 0 0 5px 0;

  }
  section {
    padding-bottom: 10px;
  }
  footer {
    h2 {
      font-family: Savoy;
      font-style: normal;
      font-weight: normal;
      font-size: 41px;
      line-height: 48px;
      color: var(--color-primaryBeta);
      @media(max-width: 780px) {
        font-size: 31px;
        line-height: 36px;
        text-align: center;
        margin-bottom: 7px;
      }
    }
  }
  @media (max-width: 780px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`

const ReadButton = styled.button`
  background-color: #535353;
  font-family: Savoy;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 135%;
  text-transform: uppercase;
  color: #FFFFFF;
  border: none;
  padding: 12px 20px;
  &:focus {
    outline: none;
  }
  @media (max-width: 780px) {
    width: 47%;
    font-size: 13px;
  }
`

const TopPostsList = ({ posts }) => {
  const { siteCover, defaultLang } = useSiteMetadata()
  const { fluid } = useSiteImages(siteCover)
  if (posts.length < 1) {
    return (<Fragment></Fragment>)
  } else {
    return (
      <Fragment>
        <MainCard style={{width: "100%"}}>
          <Link to={`/${posts[0].node.frontmatter.slug}`} aria-label={`View ${posts[0].node.frontmatter.title} article`}>
            <CardCover>
              <img src={`${(posts[0].node.frontmatter.cover && posts[0].node.frontmatter.cover.publicURL) || fluid.src}`} />
              <header>
                {Array.isArray(posts[0].node.frontmatter.tags) && (
                  <TagList tags={posts[0].node.frontmatter.tags} noLink={true} />
                )}
              </header>
            </CardCover>
            <CardContent>
              <footer>
                <h2>
                  {defaultLang !== posts[0].node.frontmatter.language && <Flag language={posts[0].node.frontmatter.language} />}
                  {posts[0].node.frontmatter.title}
                </h2>
              </footer>
              <ReadButton>
                READ NOW
              </ReadButton>
            </CardContent>
          </Link>
        </MainCard>
      </Fragment>
    )
  }
}
export default TopPostsList
