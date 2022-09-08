import * as React from 'react'
import { Hidden, Typography } from '@mui/material'
import { ListItemContainer } from './styles'
import placeholder from '../../assets/ship-placeholder.jpeg'
import { ItemProps } from '../../types'

const ListViewItem = React.forwardRef<HTMLDivElement, ItemProps>(
  ({ id, image, name, home_port: homePort, active, roles, missions }, ref) => {
    const portName = homePort.toLocaleLowerCase().includes('port of')
      ? homePort.slice(8)
      : homePort.slice(5)

    return (
      <ListItemContainer key={id} ref={ref ?? undefined}>
        <img src={image ?? placeholder} loading='lazy' alt={id} />
        <div>
          <Typography variant='caption'>Name</Typography>
          <Typography variant='subtitle2'>{name}</Typography>
        </div>

        <div>
          <Typography variant='caption'>Port</Typography>
          <Typography variant='subtitle2'>{portName}</Typography>
        </div>

        <Hidden mdDown>
          <div>
            <Typography variant='caption'>Roles</Typography>
            {roles.map((role) => (
              <Typography variant='subtitle2'>{role}</Typography>
            ))}
          </div>
        </Hidden>

        <div>
          <Typography variant='caption'>Missons</Typography>
          <Typography variant='subtitle2'>{missions.length}</Typography>
        </div>
      </ListItemContainer>
    )
  },
)

export default ListViewItem
