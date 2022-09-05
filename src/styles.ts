import styled from '@emotion/styled'
import { Container } from '@mui/material'

export const ListContainer = styled(Container)`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const ListItems = styled.div<{ layout: string }>`
  position: relative;
  grid-area: content;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: ${(props) =>
    props.layout === 'gallery'
      ? 'repeat(auto-fill, minmax(300px, 1fr))'
      : 'repeat(auto-fill, 1fr)'};
  column-gap: 1rem;
  row-gap: 1rem;
  overflow: auto;
  margin: auto;
  align-items: center;
`
