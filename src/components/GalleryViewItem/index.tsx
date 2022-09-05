import * as React from 'react'
import { Typography } from '@mui/material'
import { GalleryItemContainer } from './styles'
import placeholder from '../../assets/ship-placeholder.jpeg'

interface ItemProps {
  id: string
  image: string
  name: string
  home_port: string
}
const GalleryViewItem = React.forwardRef<HTMLDivElement, ItemProps>(
  ({ id, image, name, home_port: homePort }, ref) => (
    <GalleryItemContainer key={id} ref={ref ?? null}>
      <img src={image ?? placeholder} loading='lazy' alt={id} />
      <div>
        <Typography variant='subtitle1'>{name}</Typography>
        <Typography variant='subtitle2'>{homePort}</Typography>
      </div>
    </GalleryItemContainer>
  ),
)

export default GalleryViewItem
