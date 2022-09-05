import React, { useState } from 'react'
import ListViewItem from './components/ListViewItem'
import GalleryViewItem from './components/GalleryViewItem'
import { useGetShips } from './hooks/useGetShips'
import ErrorScreen from './components/ErrorScreen'
import LoadingScreen, { LoaderComponent } from './components/LoadingScreen'
import AppLayout from './Layout'
import FiltersBar from './components/FiltersBar'
import { ListContainer, ListItems, LoaderWrapper } from './styles'

function App() {
  const [Layout, setLayout] = useState('gallery')

  const { ref, data, loading, error, loadingMore, refetchData } = useGetShips()

  const ItemComponent = Layout === 'list' ? ListViewItem : GalleryViewItem

  if (error) return <ErrorScreen retry={refetchData} />

  if (loading) return <LoadingScreen />

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

        {loadingMore && (
          <LoaderWrapper>
            <LoaderComponent size={25} />
          </LoaderWrapper>
        )}
      </ListContainer>
    </AppLayout>
  )
}

export default App
