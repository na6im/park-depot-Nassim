import styled from '@emotion/styled'

export const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header header  header'
    'content content content';
`

export const Header = styled.div`
  grid-area: header;
`

export const Content = styled.div`
  grid-area: content;
  min-height: 100%;
  width: 100%;
`
