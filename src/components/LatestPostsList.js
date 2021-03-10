import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import useSiteMetadata from '../hooks/use-site-config'
import useSiteImages from '../hooks/use-site-images'
import TagList from './TagList'
import Flag from './Flag'
import { ReadingTime } from './Commons'
import { media } from '../tokens'

const CardsContainer = styled.aside`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 780px) {
    width: 100%;
    flex-direction: column;
  }
`

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
    object-fit: cover;
    aspect-ratio: 720/623;
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
  @media (max-width: 780px) {
    font-size: 20px;
    line-height: 22px;
    padding: 15px 0 15px;
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


const LatestPostsList = ({ posts }) => {
  const { siteCover, defaultLang } = useSiteMetadata()
  const { fluid } = useSiteImages(siteCover)
  if (posts.length < 7) {
    return (<Fragment></Fragment>)
  } else {
    return (
      <Fragment>
        <PostTopic>
        LATEST ARTICLES
        </PostTopic>
        <SubMainContainer>
          <MainCard>
            <Link to={`/${posts[1].node.frontmatter.slug}`} aria-label={`View ${posts[1].node.frontmatter.title} article`}>
              <CardCover>
                <img src={`${(posts[1].node.frontmatter.cover && posts[1].node.frontmatter.cover.publicURL) || fluid.src}`} />
              </CardCover>
              <CardContent>
                <header>
                  {Array.isArray(posts[1].node.frontmatter.tags) && (
                    <TagList tags={posts[1].node.frontmatter.tags} noLink={true} />
                  )}
                  <ReadingTime min={posts[1].node.frontmatter.timeToRead} />
                </header>
                <footer>
                  <MainCardFooter>
                    {defaultLang !== posts[1].node.frontmatter.language && <Flag language={posts[1].node.frontmatter.language} />}
                    {posts[1].node.frontmatter.title}
                  </MainCardFooter>
                </footer>
              </CardContent>
            </Link>
          </MainCard>
          <SubContainer>
            <Card>
              <Link to={`/${posts[2].node.frontmatter.slug}`} aria-label={`View ${posts[2].node.frontmatter.title} article`}>
                <CardCover>
                  <img src={`${(posts[2].node.frontmatter.cover && posts[2].node.frontmatter.cover.publicURL) || fluid.src}`} />
                </CardCover>
                <CardContent>
                  <header>
                    {Array.isArray(posts[2].node.frontmatter.tags) && (
                      <TagList tags={posts[2].node.frontmatter.tags} noLink={true} />
                    )}
                    <ReadingTime min={posts[2].node.frontmatter.timeToRead} />
                  </header>
                  <footer>
                    <CardFooter>
                      {defaultLang !== posts[2].node.frontmatter.language && <Flag language={posts[2].node.frontmatter.language} />}
                      {posts[2].node.frontmatter.title}
                    </CardFooter>
                  </footer>
                </CardContent>
              </Link>
            </Card>
            <Card>
              <Link to={`/${posts[3].node.frontmatter.slug}`} aria-label={`View ${posts[3].node.frontmatter.title} article`}>
                <CardCover>
                  <img src={`${(posts[3].node.frontmatter.cover && posts[3].node.frontmatter.cover.publicURL) || fluid.src}`} />
                </CardCover>
                <CardContent>
                  <header>
                    {Array.isArray(posts[3].node.frontmatter.tags) && (
                      <TagList tags={posts[3].node.frontmatter.tags} noLink={true} />
                    )}
                    <ReadingTime min={posts[3].node.frontmatter.timeToRead} />
                  </header>
                  <footer>
                    <CardFooter>
                      {defaultLang !== posts[3].node.frontmatter.language && <Flag language={posts[3].node.frontmatter.language} />}
                      {posts[3].node.frontmatter.title}
                    </CardFooter>
                  </footer>
                </CardContent>
              </Link>
            </Card>
          </SubContainer>
        </SubMainContainer>
        <CardsContainer>
          {posts.map((article, i) => {
            const { excerpt, timeToRead } = article.node
            const {
              tags,
              cover,
              title,
              slug,
              language,
            } = article.node.frontmatter
            const heroImg = (cover && cover.publicURL) || fluid.src
            if (i > 3 && i < 7) {
              return (
                <Card key={`prev-next-${i}`} style={{flex: "33.3%"}}>
                  <Link to={`/${slug}`} aria-label={`View ${title} article`}>
                    <CardCover>
                      <img src={ `${heroImg}` }/>
                    </CardCover>
                    <CardContent>
                      <header>
                        {Array.isArray(tags) && (
                          <TagList tags={tags} noLink={true} />
                        )}
                        <ReadingTime min={timeToRead} />
                      </header>
                      <footer>
                        <CardFooter>
                          {defaultLang !== language && <Flag language={language} />}
                          {title}
                        </CardFooter>
                      </footer>
                    </CardContent>
                  </Link>
                </Card>
              )
            }
          })}
        </CardsContainer>
      </Fragment>
    )
  }
}
export default LatestPostsList
