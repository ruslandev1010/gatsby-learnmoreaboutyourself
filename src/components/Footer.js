import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import useSiteMetadata from '../hooks/use-site-config'

const FooterWrapper = styled.footer`
  text-align: left;
  padding-top: 30px;
  padding-bottom: 50px;
  background-color: var(--color-footerBack);
  color: var(--color-white);
  max-width: 1280px;
  padding: 30px 63px;
  margin: 0 auto;
  display: flex;


  @media (max-width: 780px) {
    flex-direction: column;
  }

  & nav {
    display: block;

    max-width: 900px;
    margin: 0 auto;

    .footer-col {

      padding-right: 1em;
    }

  }

  & a {
    font-family: Savoy;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    text-transform: capitalize;
    color: white;

    @media (max-width: 780px) {
      font-size: 14px;
      line-height: 135%;
    }

    &:hover {
      color: var(--color-grey200);
    }
  }


  .footer-col > p {
    margin: 0;
  }

  .footer-title {
    font-size: 0.83em;
    margin: 0 0 1rem;
  }

  .footer-item {
    color: var(--color-white);

    & a {
      padding: 0.25rem 0;
      display: block;
    }
  }

  .footer-heart {
    color: var(--color-red);
  }

  .footer-item-text {
    padding: 0.1rem 0;
    color: var(--color-white);
  }

  .footer-header {
    order: 1;
    margin: 0 0.25rem;
    margin-right: 0.25rem;
    padding: 0.25rem;
  }

  .footer-column-items {
    grid-template-columns: 1fr;
    display: grid;
  }

  @media (max-width: 564px) {
    .footer-col:first-child {
      width: 100%;
    }
  }
`

const FootAppName = styled.div`
  font-family: Copperplate Gothic Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 22px;
  text-transform: capitalize;
  color: white;
  margin-bottom: 3px;
  @media (max-width: 780px) {
    margin-bottom: 11px;
    font-size: 19px;
    line-height: 21px;
  }
`

const FootAuthor = styled.div`
  font-family: Savoy;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  color: white;
  @media (max-width: 780px) {
    display: none;
    font-size: 14px;
    line-height: 135%;
  }
`

const FootAuthor1 = styled.div`
  font-family: Savoy;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  color: white;
  display: none;
  @media (max-width: 780px) {
    display: revert;
    margin-top: 33px;
    font-size: 14px;
    line-height: 135%;
  }
`

const FootNav = styled.div`
  font-family: Savoy;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  text-transform: capitalize;
  color: white;
  margin-bottom: 7px;

  &:first-child {
    margin-bottom: 18px;
  }

  @media (max-width: 780px) {
    font-size: 14px;
    line-height: 135%;
  }
`

const FootMenu = styled.div`
  width: 16.67%;
  @media (max-width: 780px) {
    display: none;
  }
`
const Footer = () => {
  const { authorName, websiteHost, footerLinks } = useSiteMetadata()

  const FooterItem = ({ item }) => {
    if (item.url.startsWith('/')) {
      return (
        <span className="footer-item">
          <Link className="footer-link" to={item.url}>
            {item.label}
          </Link>
        </span>
      )
    }
    return (
      <span className="footer-item">
        <a className="footer-link" href={item.url}>
          {item.label}
        </a>
      </span>
    )
  }

  const FooterColumn = ({ column }) => {
    return (
      <div className="footer-col">

        <div className="footer-column-items">
          {column.links.map((item, i) => {
            return <FooterItem item={item} key={`footer-column-item-${i}`} />
          })}
        </div>
      </div>
    )
  }

  return (
    <FooterWrapper>
      <div className="col-6">
        <FootAppName>LEARNMOREABOUTYOURSELF</FootAppName>
        <FootAuthor>{authorName} © {new Date().getFullYear()}</FootAuthor>
      </div>
      <div className="col-4">
        <FootNav>More From Us:</FootNav>
        <nav>
          {footerLinks.map((column, i) => {
            return <FooterColumn column={column} key={`footer-column-${i}`} />
          })}
        </nav>
      </div>

      <FootMenu>
        <FootNav>More Articles:</FootNav>
        <FootNav>Happiness</FootNav>
        <FootNav>Success</FootNav>
        <FootNav>Motivation</FootNav>
        <FootNav>Self Help</FootNav>
        <FootNav>Communication</FootNav>
        <FootNav>Fitness</FootNav>
        <FootNav>Work</FootNav>
      </FootMenu>
      <FootAuthor1>{authorName} © {new Date().getFullYear()}</FootAuthor1>
    </FooterWrapper>
  )
}

export default Footer
