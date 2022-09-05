import React, { useState } from 'react'
import { Typography } from '@mui/material'
import ListViewItem from './components/ListViewItem'
import GalleryViewItem from './components/GalleryViewItem'
import AppLayout from './Layout'
import FiltersBar from './components/FiltersBar'
import { useGetShips } from './hooks/useGetShips'
import { ListContainer, ListItems } from './styles'

function App() {
  const [Layout, setLayout] = useState('gallery')

  const { ref, data, loading, error, loadingMore } = useGetShips()

  const ItemComponent = Layout === 'list' ? ListViewItem : GalleryViewItem

  if (loading) return <Typography variant='subtitle1'>loading...</Typography>
  if (error) return <Typography variant='subtitle1'>error...</Typography>

  return (
    <AppLayout>
      <ListContainer maxWidth='xl'>
        <FiltersBar layout={Layout} setLayout={setLayout} />
        <ListItems layout={Layout}>
          {data &&
            data.ships?.map((ship, index) => {
              const isLast = index === data.ships.length - 1
              return <ItemComponent key={ship.id} {...ship} ref={isLast ? ref : undefined} />
            })}
        </ListItems>

        {loadingMore && <div style={{ height: '100px' }}>loading...</div>}
      </ListContainer>
    </AppLayout>
  )
}

export default App
