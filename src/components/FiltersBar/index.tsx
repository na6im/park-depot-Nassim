import React, { Dispatch, SetStateAction } from 'react'
import { ButtonGroup, IconButton, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { Container } from './styles'

import line from '../../assets/line.svg'
import gallery from '../../assets/square.svg'
import { ShipType } from '../../types'

interface FiltersProps {
  layout: string
  setLayout: (el: string) => void
  typeOptions: {
    shipType: ShipType
    setType: Dispatch<SetStateAction<ShipType>>
  }
}
function FiltersBar({ layout, setLayout, typeOptions: { shipType, setType } }: FiltersProps) {
  const handleChangeType = (event: SelectChangeEvent) => {
    setType(event.target.value as ShipType)
  }
  return (
    <Container>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        View
        <ButtonGroup
          sx={{ marginLeft: '10px' }}
          variant='text'
          aria-label='outlined primary button group'
        >
          <IconButton onClick={() => setLayout('list')}>
            <img style={{ width: '20px' }} src={line} alt='line' />
          </IconButton>
          <IconButton onClick={() => setLayout('gallery')}>
            <img style={{ width: '20px' }} src={gallery} alt='gallery' />
          </IconButton>
        </ButtonGroup>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        Type
        <Select
          value={shipType}
          label='Type'
          onChange={handleChangeType}
          variant='standard'
          placeholder='Ship Type'
          sx={{ marginLeft: '10px', width: '100px' }}
        >
          {Object.values(ShipType).map((key) => (
            <MenuItem value={key}>{key}</MenuItem>
          ))}
        </Select>
      </div>
    </Container>
  )
}

export default FiltersBar
