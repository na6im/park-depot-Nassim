import * as React from 'react'
import { Typography } from '@mui/material'
import { ActiveButton, GalleryItemContainer } from './styles'
import placeholder from '../../assets/ship-placeholder.jpeg'
import { ItemProps } from '../../types'

const GalleryViewItem = React.forwardRef<HTMLDivElement, ItemProps>(
  ({ id, image, name, home_port: homePort, active }, ref) => (
    <GalleryItemContainer key={id} ref={ref ?? null}>
      <img src={image ?? placeholder} loading='lazy' alt={id} />
      <div>
        <div>
          <Typography variant='subtitle1'>{name}</Typography>
          <Typography variant='subtitle2'>{homePort}</Typography>
        </div>
        <ActiveButton active={active}>
          {active ? 'active' : 'inactive'}
          <div />
        </ActiveButton>
      </div>
    </GalleryItemContainer>
  ),
)

export default GalleryViewItem
