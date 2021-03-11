import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const ListContainer = styled.div`
  display: inline;
  color: var(--color-textSecondary);
  @media(max-width: 780px) {
    justify-content: center;
    display: flex;
    margin-top: 8px;
  }
`

const TagListItemLink = styled(Link)`
  text-transform: uppercase;
  font-size: 13px;
  line-height: 135%;
  &:not(:first-child) {
    margin-left: 0.3rem;
  }

  &:hover {
    border-bottom: 1px dotted var(--color-textSecondary);
  }
  &:before {
    content: '#';
  }
`

const TagListItem = styled.span`
  font-family: Savoy;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 135%;
  text-transform: uppercase;
  color: #CD1D42;
  &:not(:first-child) {
    margin-left: 0.3rem;
  }
`

class TagList extends React.Component {
  render() {
    const { tags, noLink } = this.props

    return (
      <ListContainer>
        {tags.map((tag, i) => {
          return (
            <Fragment key={`tag-list-${i}`}>
              {!noLink && (
                <TagListItemLink to={`/tags/${tag}`} style={{color: '#CD1D42'}}>{tag}</TagListItemLink>
              )}
              {noLink && <TagListItem to={`/tags/${tag}`} style={{color: '#CD1D42'}}>{tag}</TagListItem>}
              {i < tags.length - 1 ? ', ' : ''}
            </Fragment>
          )
        })}
      </ListContainer>
    )
  }
}

export default TagList
