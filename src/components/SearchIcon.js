import React from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../ThemeContext'
import LightIcon from './icons/search-light.svg'
import DarkIcon from './icons/search-dark.svg'

const DarkModeButton = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
  padding: 8px 10px;
  font-weight: 700;
  margin: 10px 0;
  font-size: 16px;
  font-family: 'Lato', sans-serif;
  &:focus {
    outline: none;
  }
`


const SearchIcon = ({ isExpanded = false }) => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext)

  if (!colorMode) {
    return null
  }

  const oppositeColor = colorMode === 'light' ? 'dark' : 'light'

  return (
    <DarkModeButton
      aria-label={`Activate ${oppositeColor} mode`}
    >
      {colorMode === 'dark' ? (
        <img src={DarkIcon} alt="search icon" />
      ) : (
        <img src={LightIcon} alt="search icon" />
      )}
      {isExpanded && `Toggle ${oppositeColor} mode`}
    </DarkModeButton>
  )
}

export default SearchIcon
