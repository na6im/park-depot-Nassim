import React from 'react'
import { ButtonGroup, IconButton } from '@mui/material'
import { Container } from './styles'

import line from '../../assets/line.svg'
import gallery from '../../assets/square.svg'

interface FiltersProps {
  layout: string
  setLayout: (el: string) => void
}
function FiltersBar({ layout, setLayout }: FiltersProps) {
  return (
    <Container>
      <ButtonGroup variant='text' aria-label='outlined primary button group'>
        <IconButton onClick={() => setLayout('list')}>
          <img style={{ width: '20px' }} src={line} alt='line' />
        </IconButton>
        <IconButton onClick={() => setLayout('gallery')}>
          <img style={{ width: '20px' }} src={gallery} alt='gallery' />
        </IconButton>
      </ButtonGroup>
    </Container>
  )
}

export default FiltersBar
