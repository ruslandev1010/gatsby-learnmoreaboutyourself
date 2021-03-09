import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import useSiteMetadata from '../hooks/use-site-config'
import useSiteImages from '../hooks/use-site-images'
import ReadTagList from './ReadTagList'
import Flag from './Flag'

const ReadContainer = styled.div`
  background-color: '#F9F9F9';
  bottom-border: 1px solid #E7E7E7;
`
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
  background-color: var(--color-secondaryBack);
  padding: 30px 63px;
  img {
    height: 142px;
    @media (max-width: 780px) {
      height: 300px;
    }
  }
  @media (min-width: 780px) {
  }
`

const CardCover = styled.img`
  margin-right: 14px;
  width: 50%;
  height: auto;
  background: #c5d2d9 no-repeat 50%;
  background-size: cover;
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 0 0 0;
  header {
    padding: 0 0 5px 0;
  }
  section {
    padding-bottom: 10px;
  }
  footer {
    h2 {
      color: var(--color-cardFooter);
      font-family: Savoy;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 21px;
    }
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
  }
`

const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const ReadPostsList = ({ posts }) => {
  const { siteCover, defaultLang } = useSiteMetadata()
  const { fluid } = useSiteImages(siteCover)
  if (posts.length < 10) {
    return (<ReadContainer></ReadContainer>)
  } else {
    return (
      <ReadContainer>
        <PostTopic>
          - MUST READ -
        </PostTopic>
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
            if (i > 6 && i < 10) {
              return (
                <Card key={`prev-next-${i}`} style={{flex: "33.3%"}}>
                  <Link to={`/${slug}`} aria-label={`View ${title} article`}>
                    <SubContainer>
                      <CardCover src={ `${heroImg}` }/>
                      <CardContent>
                        <header>
                          {Array.isArray(tags) && (
                            <ReadTagList tags={tags} noLink={true} />
                          )}
                        </header>
                        <footer>
                          <h2>
                            {defaultLang !== language && <Flag language={language} />}
                            {title}
                          </h2>
                        </footer>
                      </CardContent>
                    </SubContainer>

                  </Link>
                </Card>
              )
            }
          })}
        </CardsContainer>
      </ReadContainer>
    )
  }
}
export default ReadPostsList
