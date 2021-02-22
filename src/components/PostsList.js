import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import useSiteMetadata from '../hooks/use-site-config'
import useSiteImages from '../hooks/use-site-images'
import TagList from './TagList'
import Flag from './Flag'
import { ReadingTime, Bull } from './Commons'

const CardsContainer = styled.aside`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 780px) {
    width: 100%;
    padding: 25px;
  }
`

const Card = styled.article`
  cursor: pointer;

  background-color: var(--color-secondaryContentBackground);
  box-shadow: 0 0 0 0, 0 6px 12px rgba(0, 0, 0, 0.1);
  margin: 10px 10px;
  border-radius: 5px;

  &:hover {
    box-shadow: 0 0 0 0, 0 6px 12px var(--color-grey300);
    transition: all 0.3s ease;
    transform: translate3D(0, -1px, 0);
  }
  @media (min-width: 780px) {
    max-width: 320px;
  }
`

const CardCover = styled.div`
  width: auto;
  height: 200px;
  background: #c5d2d9 no-repeat 50%;
  background-size: cover;
  border-radius: 5px 5px 0 0;
`

const CardContent = styled.div`
  padding: 20px;

  header {
    padding: 0 0 10px 0;
  }
  section {
    padding-bottom: 10px;
  }
  footer {
    font-size: 0.8em;
  }
`

const PostsList = ({ posts }) => {
  const { siteCover, defaultLang } = useSiteMetadata()
  const { fluid } = useSiteImages(siteCover)

  return (
    <Fragment>
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

          return (
            <Card key={`prev-next-${i}`}>
              <Link to={`/${slug}`} aria-label={`View ${title} article`}>
                <CardCover style={{ backgroundImage: `url("${heroImg}")` }} />
                <CardContent>
                  <header>
                    <h2>
                      {defaultLang !== language && <Flag language={language} />}
                      {title}
                    </h2>
                  </header>
                  <section>
                    <p>{excerpt}</p>
                  </section>
                  <footer>
                    <ReadingTime min={timeToRead} />
                    {Array.isArray(tags) && (
                      <>
                        <Bull />
                        <TagList tags={tags} noLink={true} />
                      </>
                    )}
                  </footer>
                </CardContent>
              </Link>
            </Card>
          )
        })}
      </CardsContainer>
    </Fragment>
  )
}
export default PostsList
