import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { Link } from 'gatsby'

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Lato", sans-serif;
  color: var(--color-text);
  background-color: var(--color-siteBackground);
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border: 0;
}

a {
  text-decoration: none;
  color: var(--color-text);
}

hr {
  border: 0;
  border-top: 1px solid var(--color-grey100);
  margin: 50px 0 5px 0;
}

ul,
ol {
  padding-left: 2em;
  margin: 1em 0 0 0;
}

*::selection {
  background-color: var(--color-secondary);
}

.col-8 {
  width: 66.66%;
}

.col-6 {
  width: 50%;
}

.col-4 {
  width: 33.33%;
}

.col-3 {
  width: 25%;
}

.col-2 {
  width: 16.67%;
}

`
export const StyledLink = styled(Link)`
  box-shadow: 0 2px 0 0 var(--color-secondary);

  &:hover {
    filter: brightness(150%);
    box-shadow: none;
  }
`

export const Text = styled.p`
  line-height: 1.6;
  margin: 1em 0 0 0;
`

export const Bull = styled.span`
  display: inline-block;
  color: var(--color-textSecondary);
  margin: 0 4px;
  &::before {
    content: '•';
  }
`

const ReadingTimeContainer = styled.span`
  text-transform: uppercase;
  color: var(--color-textSecondary);
  font-size: 13px;
  line-height: 135%;
`

export const ReadingTime = props => {
  return <ReadingTimeContainer style={{color: '#969696'}}>{props.min} MIN READ</ReadingTimeContainer>
}
