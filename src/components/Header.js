/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import useSiteMetadata from '../hooks/use-site-config'
import { media } from '../tokens'
import useSiteImages from '../hooks/use-site-images'
import DarkToggle from './DarkToggle'
import SearchIcon from './SearchIcon'

const HeaderWrapper = styled.header`
  top: 0;
  display: block;
  width: 100%;
  z-index: 1000;
  background-color: var(--color-primaryBetaBack);
  font-weight: 700;

  @media (min-width: 780px) {
    position: sticky;
  }
`

const HeaderNav = styled.nav`
  font-weight: 700;
  margin-left: auto;
  margin-right: auto;
  height: 120px;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  justify-content: center;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;

`

const HeaderLinksContainer = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 14px;
  text-transform: lowercase;
  display: none;
  -webkit-box-align: center;
  align-items: center;
  justify-content: center;

  background: var(--color-primaryBetaBack);
  box-shadow: 0px 4px 4px #E7E7E7;
  @media (min-width: 780px) {
    display: flex;
  }
`
const HeaderLinkTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 58px;
  font-family: Copperplate Gothic Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 31px;
  line-height: 34px;
  text-transform: capitalize;
  border-bottom: 1px solid #E8E8E8;
  box-sizing: border-box;
`

const HeaderLink = styled(Link)`
  align-items: center;
  border: 0;
  margin: 0;
  padding: 15px 10px;
  color: var(--color-primaryBeta);

  font-family: Copperplate Gothic Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 14px;
  text-transform: uppercase;

  min-width: 58px;
  z-index: 10;
  & + & {
    margin-left: 0.7rem;
  }

`

const HeaderLinkTitle = styled(HeaderLink)`
  color: var(--color-primaryBeta);
`

const HeaderLinkTitleContent = styled.span`
  display: block;
  padding-left: 0;
  font-family: Copperplate Gothic Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 31px;
  line-height: 34px;
  text-transform: capitalize;
  color: #CD1D42;
`

const HeaderImage = styled.img`
  padding: 4px;
  height: 57px;
`

const MobilePanel = styled.div`
  position: absolute;
  z-index: 20;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--color-primaryBetaBack);
  margin-bottom: 300px;
  @media (min-width: 780px) {
    display: none;
  }
`

const SkipMainContent = styled.a`
  position: absolute;
  left: -999px;
  width: 1px;
  height: 1px;
  top: auto;
  color: var(--color-white);
  background-color: var(--color-grey700);

  &:focus {
    display: inline-block;
    height: auto;
    width: auto;
    position: static;
    padding: 20px 10px;
  }
`

const MobileNav = styled.nav`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-evenly;
  margin: 0px auto;

  & a {
    display: flex;
    margin: 10px 0 !important;
  }
`

const HeaderLinksMainSubContainer = styled.div`
  max-width: 1280px;
  margin: auto;
  display: flex;
  align-items: center;
  width: 100%;
`
const HeaderLinksSubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 66.66%;
`
const HeaderLinksSubMargin = styled.div`
  justify-content: flex-end;
  display: flex;
  width: 16.67%;
`

const HeaderLinks = ({ headerLinks }) => {
  return headerLinks.map((headerLink, i) => (
    <HeaderLink
      to={headerLink.url}
      key={`header-link-${i}`}
      aria-label={`View ${headerLink.label} page`}
    >
      {headerLink.label}
    </HeaderLink>
  ))
}

const BurgerButton = styled.button`
  z-index: 30;
  top: 0px;
  position: relative;
  color: var(--color-white);
  display: flex;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px 12px;
  outline: none;
  -webkit-tap-highlight-color: transparent;

  @media (min-width: 780px) {
    display: none;
  }
`

const BurgerContent = styled.div`
  width: 24px;
  top: 30px;
  height: 2px;
  background: var(--color-primaryBeta);
  position: absolute;
  left: 0;
  ${props =>
    props.isToggledOn
      ? 'background: transparent'
      : `background: var(--color-primaryBeta)`};
  transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
  ::before {
    content: '';
    top: -8px;
    width: 24px;
    height: 2px;
    background: var(--color-primaryBeta);
    position: absolute;
    left: 0;
    ${props =>
      props.isToggledOn
        ? 'transform: rotate(45deg); top: 0;'
        : 'transform: rotate(0)'};
    transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
  }
  ::after {
    top: 8px;
    content: '';
    width: 24px;
    height: 2px;
    background: white;
    position: absolute;
    left: 0;
    ${props =>
      props.isToggledOn
        ? 'transform: rotate(-45deg); top: 0;'
        : 'transform: rotate(0)'};
    transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
  }
`

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const MobileHeader = ({ headerLinks }) => {
  const [isToggledOn, setToggle] = useState(false)
  const toggle = () => setToggle(!isToggledOn)

  return (
    <>
      <BurgerButton
        onClick={toggle}
        aria-label={`${isToggledOn ? 'close menu' : 'open menu'}`}
      >
        <BurgerContent isToggledOn={isToggledOn} />
      </BurgerButton>
      {isToggledOn && (
        <MobilePanel>
          <MobileNav>
            <HeaderLinks headerLinks={headerLinks} />
            <IconsContainer>
              <DarkToggle isExpanded={true} />
              <SearchIcon />
            </IconsContainer>
          </MobileNav>
        </MobilePanel>
      )}
    </>
  )
}

const Header = () => {
  const {
    headerLinks,
    siteTitle,
    headerTitle,
    headerLinksIcon,
  } = useSiteMetadata()
  const iconSrc = headerLinksIcon
    ? useSiteImages(headerLinksIcon).fluid.src
    : null

  return (
    <HeaderWrapper>
      <HeaderNav>
        <SkipMainContent href="#main-content">
          Skip to main content
        </SkipMainContent>
        <HeaderLinkTitleContainer>
          <HeaderLinkTitle to={`/`} aria-label={`View home page`}>
            {iconSrc && <HeaderImage src={iconSrc} alt={siteTitle} />}
            <HeaderLinkTitleContent>{headerTitle}</HeaderLinkTitleContent>
          </HeaderLinkTitle>
        </HeaderLinkTitleContainer>
        <HeaderLinksContainer>
          <HeaderLinksMainSubContainer>
            <HeaderLinksSubMargin>
            </HeaderLinksSubMargin>
            <HeaderLinksSubContainer>
              <HeaderLinks headerLinks={headerLinks} />
            </HeaderLinksSubContainer>
            <HeaderLinksSubMargin>
              <DarkToggle />
              <SearchIcon />
            </HeaderLinksSubMargin>
          </HeaderLinksMainSubContainer>
        </HeaderLinksContainer>
        <MobileHeader headerLinks={headerLinks} />
      </HeaderNav>
    </HeaderWrapper>
  )
}

export default Header
