import React, { useMemo, useState } from 'react'
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

  const { ref, ships, loading, error, loadingMore, refetchData, typeOptions } = useGetShips()

  const ItemComponent = Layout === 'list' ? ListViewItem : GalleryViewItem

  if (error) return <ErrorScreen retry={refetchData} />

  const listItems = useMemo(
    () => (
      <ListItems layout={Layout}>
        {ships?.map((ship, index) => {
          const isLast = index === ships.length - 1
          return <ItemComponent key={ship.id} {...ship} ref={isLast ? ref : undefined} />
        })}
      </ListItems>
    ),
    [ships, Layout],
  )
  return (
    <AppLayout>
      <ListContainer maxWidth='xl'>
        <FiltersBar layout={Layout} setLayout={setLayout} typeOptions={typeOptions} />
        {loading ? <LoadingScreen /> : listItems}

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
