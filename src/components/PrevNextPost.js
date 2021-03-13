import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import useSiteMetadata from '../hooks/use-site-config'
import useSiteImages from '../hooks/use-site-images'
import TagList from './TagList'
import Flag from './Flag'
import { ReadingTime, Bull } from './Commons'

const PreviewContainer = styled.aside`
  display: flex;
  flex-wrap: wrap;
  max-width: 770px;
  width: 80%;
  margin: 0px auto 30px auto;
  top: 20px;
  position: relative;

  @media (max-width: 780px) {
    width: 100%;
    padding: 25px;
  }
`

const Preview = styled.article`
  cursor: pointer;
  flex: 1 1 300px;
  background-color: var(--color-primaryBetaBack);
  box-shadow: 0 0 0 0, 0 6px 12px rgba(0, 0, 0, 0.1);
  margin: 20px 20px;

  @media (min-width: 780px) {
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`

const PreviewCover = styled.img`
  width: auto;
  height: 300px;
  background: #c5d2d9 no-repeat 50%;
  background-size: cover;
`

const PreviewContent = styled.div`
  padding: 5px 0 0 0;

  header {
    padding: 0 0 5px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  section {
    padding-bottom: 10px;
  }
  footer h2 {
    font-family: Savoy;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    color: var(--color-primaryBeta);
  }
`

const PrevNextPost = props => {
  const { previous, next } = props
  const articles = [previous, next].filter(i => i).map(item => ({ node: item }))
  const { siteCover, defaultLang } = useSiteMetadata()
  const { fluid } = useSiteImages(siteCover)

  return (
    <Fragment>
      <PreviewContainer>
        {articles.map((article, i) => {
          const { excerpt, timeToRead } = article.node
          const {
            tags,
            cover,
            title,
            slug,
            language,
          } = article.node.frontmatter
          const heroImg = (cover && cover.publicURL) || fluid.src

          return (
            <Preview key={`prev-next-${i}`}>
              <Link to={`/${slug}`} aria-label={`View ${title} article`}>
                <PreviewCover
                  src= {`${heroImg}`}
                />
                <PreviewContent>
                  <header>
                    {Array.isArray(tags) && (
                      <>
                        <TagList tags={tags} noLink={true} />
                      </>
                    )}
                    <ReadingTime min={timeToRead} />
                  </header>
                  <footer>
                    <h2>
                      {defaultLang !== language && <Flag language={language} />}
                      {title}
                    </h2>
                  </footer>
                </PreviewContent>
              </Link>
            </Preview>
          )
        })}
      </PreviewContainer>
    </Fragment>
  )
}

export default PrevNextPost
