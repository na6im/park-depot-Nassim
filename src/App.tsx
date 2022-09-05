import React from 'react'
import { Container, Typography } from '@mui/material'
import { useQuery } from '@apollo/client'
import { GET_SHIPS } from './queries'

function App() {
  const { data, loading, error } = useQuery<
    { image: string; class: string; name: string },
    { limit: number; offset: number }
  >(GET_SHIPS, {
    variables: {
      limit: 10,
      offset: 0,
    },
  })

  console.log(data, loading, error)
  return (
    <Container maxWidth='xl' style={{ height: '100%' }}>
      <Typography color='primary'>App</Typography>
    </Container>
  )
}

export default App
