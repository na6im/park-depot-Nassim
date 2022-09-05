import * as React from 'react'
import { Typography } from '@mui/material'
import { ListItemContainer } from './styles'
import placeholder from '../../assets/ship-placeholder.jpeg'

interface ItemProps {
  id: string
  image: string
  name: string
  home_port: string
}
const ListViewItem = React.forwardRef<HTMLDivElement, ItemProps>(
  ({ id, image, name, home_port: homePort }, ref) => (
    <ListItemContainer key={id} ref={ref ?? undefined}>
      <img src={image ?? placeholder} loading='lazy' alt={id} />
      <div>
        <Typography variant='subtitle1'>{name}</Typography>
        <Typography variant='subtitle2'>{homePort}</Typography>
      </div>
      <img src={image ?? placeholder} loading='lazy' alt={id} />
    </ListItemContainer>
  ),
)

export default ListViewItem
