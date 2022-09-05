import { ReactElement } from 'react'
import { ApolloProvider } from '@apollo/client'
import { CssBaseline, ThemeProvider } from '@mui/material'
import graphqlClient from './graphql'
import theme from './theme'

interface WrapperProps {
  children: ReactElement
}

const Wrapper = ({ children }: WrapperProps) => (
  <ApolloProvider client={graphqlClient}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </ApolloProvider>
)

export default Wrapper
