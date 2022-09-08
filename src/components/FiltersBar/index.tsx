import React, { Dispatch, SetStateAction } from 'react'
import { ButtonGroup, Button, MenuItem, SelectChangeEvent } from '@mui/material'

import { Container, SelectMenu } from './styles'
import { ShipType, ViewType } from '../../types'
import Line from '../../assets/Line'
import Square from '../../assets/Square'

interface FiltersProps {
  layout: string
  setLayout: (el: ViewType) => void
  typeOptions: {
    shipType: ShipType
    setType: Dispatch<SetStateAction<ShipType>>
  }
}

function FiltersBar({ layout, setLayout, typeOptions: { shipType, setType } }: FiltersProps) {
  const handleChangeType = (event: SelectChangeEvent<unknown>) => {
    setType(event.target.value as ShipType)
  }

  const Icons: { [key: string]: ({ isActive }: { isActive: boolean }) => JSX.Element } = {
    list: Line,
    gallery: Square,
  }

  return (
    <Container>
      <div>
        <span>View</span>
        <ButtonGroup variant='contained' aria-label='outlined primary button group'>
          {Object.values(ViewType).map((view) => {
            const ViewIcon = Icons[view]
            const onClick = () => setLayout(view)
            const isActive = view === layout
            return (
              <Button variant={isActive ? 'contained' : 'text'} onClick={onClick}>
                <ViewIcon isActive={isActive} />
              </Button>
            )
          })}
        </ButtonGroup>
      </div>
      <div>
        <span>Type</span>
        <SelectMenu value={shipType} label='Type' onChange={handleChangeType} variant='standard'>
          {Object.values(ShipType).map((key) => (
            <MenuItem value={key}>{key}</MenuItem>
          ))}
        </SelectMenu>
      </div>
    </Container>
  )
}

export default FiltersBar
