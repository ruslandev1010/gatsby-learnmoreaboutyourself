import styled from 'styled-components'

const Wrapper = styled.main.attrs(props => ({
  role: !props.as ? 'main' : undefined,
  id: !props.as ? 'main-content' : undefined,
}))`
  position: relative;
  border-radius: 5px;
  width: 60%;
  max-width: 828px;
  word-wrap: break-word;
  background-color: var(--color-primaryBetaBack);
  margin: 0px auto 30px auto;
  top: 30px;

  @media (max-width: 780px) {
    width: 100%;
    padding: 25px;
  }
`

export default Wrapper
