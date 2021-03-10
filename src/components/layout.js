import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import 'prismjs/themes/prism-tomorrow.css'
import { GlobalStyle } from './Commons'
import { media } from '../tokens'

const SiteContent = styled.div`
  max-width: 1280px;
  margin: 0 auto 0;
  border: 1px solid red;
`

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <GlobalStyle />
        <Header />
        <SiteContent>{children}</SiteContent>
        <Footer />
      </>
    )
  }
}

export default Template
