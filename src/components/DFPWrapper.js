import React from 'react'
import { Bling as GPT } from 'react-gpt'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

const StyledDFP = styled.div`
  margin: 2rem 0;
`

const DFPWrapper = props => {
  return <>
    <Helmet>
      <script async src='https://securepubads.g.doubleclick.net/tag/js/gpt.js' />
      <script>
        {`window.googletag = window.googletag || { cmd: [] };
          googletag.cmd.push(function() {
          googletag.defineSlot('/22274312948/lm1_lb1', [728, 90], 'div-gpt-ad-1614985862735-0').addService(googletag.pubads());
          googletag.pubads().enableSingleRequest();
          googletag.enableServices();`}
      </script>
    </Helmet>
    <StyledDFP>
      <GPT adUnitPath='/22274312948/lm1_lb1' slotSize={[728, 90]} />
    </StyledDFP>
  </>
}

export default DFPWrapper