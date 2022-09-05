import React from 'react'
import HeaderBar from './AppHeader'
import { Container, Content, Header } from './styles'

const AppLayout: React.FC<{ children: JSX.Element[] | JSX.Element }> = ({ children }) => (
  <Container>
    <Header>
      <HeaderBar />
    </Header>
    <Content>{children}</Content>
  </Container>
)

export default AppLayout
