import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const ListContainer = styled.div`
  display: inline;
  color: var(--color-textSecondary);
`

const TagListItemLink = styled(Link)`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
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
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  &:not(:first-child) {
    margin-left: 0.3rem;
  }
`

class ReadTagList extends React.Component {
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

export default ReadTagList
