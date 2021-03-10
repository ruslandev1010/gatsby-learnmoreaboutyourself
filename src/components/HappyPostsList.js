import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import useSiteMetadata from '../hooks/use-site-config'
import useSiteImages from '../hooks/use-site-images'
import TagList from './TagList'
import Flag from './Flag'
import { ReadingTime } from './Commons'

const Card = styled.article`
  cursor: pointer;
  background-color: var(--color-primaryBetaBack);
  padding: 30px 63px;
  @media (min-width: 780px) {
  }
`

const MainCard = styled.article`
  cursor: pointer;
  background-color: var(--color-primaryBetaBack);
  padding: 30px 63px;
  width: 66.66%;
  @media (max-width: 780px) {
    width: 100%;
  }
`
const CardCover = styled.div`
  img {
    width: 100%;
    height: auto;
    background: #c5d2d9 no-repeat 50%;
    background-size: cover;
  }
`

const CardContent = styled.div`
  padding: 5px 0 0 0;

  header {
    padding: 0 0 5px 0;
    display: flex;
    justify-content: space-between;
  }
  section {
    padding-bottom: 10px;
  }
`

const PostTopic = styled.div`
  font-family: Copperplate Gothic Light;
  text-align: center;
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 53px;
  text-transform: uppercase;
  color: var(--color-primaryBeta);
  border-bottom: 1px solid #E7E7E7;
  border-top: 1px solid #E7E7E7;
  margin-top: 65px;
  margin-bottom: 40px;
  @media (max-width: 780px) {
    font-size: 20px;
    line-height: 22px;
  }
`

const SubMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 780px) {
    flex-direction: column;
  }
`

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.33%;
  @media (max-width: 780px) {
    width: 100%;
  }
`

const MainCardFooter = styled.h2`
  font-family: Savoy;
  font-style: normal;
  font-weight: normal;
  font-size: 31px;
  line-height: 36px;
  color: var(--color-primaryBeta);
`

const CardFooter = styled.h2`
  font-weight: normal;
  font-size: 20px;
  color: var(--color-cardFooter);
  font-family: Savoy;
  font-style: normal;
  line-height: 23px;
`

const HappyPostsList = ({ posts }) => {
  const { siteCover, defaultLang } = useSiteMetadata()
  const { fluid } = useSiteImages(siteCover)
  if (posts.length < 13) {
    return (<Fragment></Fragment>)
  } else {
    return (
      <Fragment>
        <PostTopic>
          DON'T WORK - BE HAPPY
        </PostTopic>
        <SubMainContainer>
          <SubContainer>
            <Card>
              <Link to={`/${posts[10].node.frontmatter.slug}`} aria-label={`View ${posts[9].node.frontmatter.title} article`}>
                <CardCover>
                  <img src={`${(posts[10].node.frontmatter.cover && posts[10].node.frontmatter.cover.publicURL) || fluid.src}`} />
                </CardCover>
                <CardContent>
                  <header>
                    {Array.isArray(posts[10].node.frontmatter.tags) && (
                      <TagList tags={posts[10].node.frontmatter.tags} noLink={true} />
                    )}
                    <ReadingTime min={posts[10].node.frontmatter.timeToRead} />
                  </header>
                  <footer>
                    <CardFooter>
                      {defaultLang !== posts[10].node.frontmatter.language && <Flag language={posts[10].node.frontmatter.language} />}
                      {posts[10].node.frontmatter.title}
                    </CardFooter>
                  </footer>
                </CardContent>
              </Link>
            </Card>
            <Card>
              <Link to={`/${posts[11].node.frontmatter.slug}`} aria-label={`View ${posts[11].node.frontmatter.title} article`}>
                <CardCover>
                  <img src={`${(posts[11].node.frontmatter.cover && posts[11].node.frontmatter.cover.publicURL) || fluid.src}`} />
                </CardCover>
                <CardContent>
                  <header>
                    {Array.isArray(posts[11].node.frontmatter.tags) && (
                      <TagList tags={posts[11].node.frontmatter.tags} noLink={true} />
                    )}
                    <ReadingTime min={posts[11].node.frontmatter.timeToRead} />
                  </header>
                  <footer>
                    <CardFooter>
                      {defaultLang !== posts[11].node.frontmatter.language && <Flag language={posts[11].node.frontmatter.language} />}
                      {posts[11].node.frontmatter.title}
                    </CardFooter>
                  </footer>
                </CardContent>
              </Link>
            </Card>
          </SubContainer>

          <MainCard>
            <Link to={`/${posts[12].node.frontmatter.slug}`} aria-label={`View ${posts[12].node.frontmatter.title} article`}>
              <CardCover>
                <img src={`${(posts[12].node.frontmatter.cover && posts[12].node.frontmatter.cover.publicURL) || fluid.src}`}/>
              </CardCover>
              <CardContent>
                <header>
                  {Array.isArray(posts[12].node.frontmatter.tags) && (
                    <TagList tags={posts[12].node.frontmatter.tags} noLink={true} />
                  )}
                  <ReadingTime min={posts[12].node.frontmatter.timeToRead} />
                </header>
                <footer>
                  <MainCardFooter>
                    {defaultLang !== posts[12].node.frontmatter.language && <Flag language={posts[12].node.frontmatter.language} />}
                    {posts[12].node.frontmatter.title}
                  </MainCardFooter>
                </footer>
              </CardContent>
            </Link>
          </MainCard>
        </SubMainContainer>
      </Fragment>
    )
  }
}
export default HappyPostsList
