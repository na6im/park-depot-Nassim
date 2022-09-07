import * as React from 'react'
import { Typography } from '@mui/material'
import { ListItemContainer } from './styles'
import placeholder from '../../assets/ship-placeholder.jpeg'
import { ActiveButton } from '../GalleryViewItem/styles'

interface ItemProps {
  id: string
  image: string
  name: string
  home_port: string
  roles: string[]
  active: boolean
  missions: Array<{ name: string }>
}
const ListViewItem = React.forwardRef<HTMLDivElement, ItemProps>(
  ({ id, image, name, home_port: homePort, active, roles, missions }, ref) => (
    <ListItemContainer key={id} ref={ref ?? undefined}>
      <img src={image ?? placeholder} loading='lazy' alt={id} />
      <div>
        <Typography variant='caption'>Name</Typography>
        <Typography variant='subtitle2'>{name}</Typography>
      </div>

      <div>
        <Typography variant='caption'>Home port</Typography>
        <Typography variant='subtitle2'>{homePort}</Typography>
      </div>

      <div>
        <Typography variant='caption'>Roles</Typography>
        {roles.map((role) => (
          <Typography variant='subtitle2'>{role}</Typography>
        ))}
      </div>

      <div>
        <Typography variant='caption'>Missons</Typography>
        <Typography variant='subtitle2'>{missions.length}</Typography>
      </div>
    </ListItemContainer>
  ),
)

export default ListViewItem
