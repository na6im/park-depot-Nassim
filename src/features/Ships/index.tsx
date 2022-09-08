import React, { useMemo, useState } from 'react'
import ListViewItem from '../../components/ListViewItem'
import GalleryViewItem from '../../components/GalleryViewItem'
import { useGetShips } from '../../hooks/useGetShips'
import ErrorScreen from '../../components/ErrorScreen'
import LoadingScreen, { LoaderComponent } from '../../components/LoadingScreen'
import AppLayout from '../../Layout'
import FiltersBar from '../../components/FiltersBar'
import { ListContainer, ListItems, LoaderWrapper } from './styles'
import { ViewType } from '../../types'

function Ships() {
  const {
    ref,
    reqData: { ships, loading, error },
    fetchMore: { loadingMore, refetchData },
    typeOptions,
  } = useGetShips()

  const [Layout, setLayout] = useState<ViewType>(
    () => (localStorage.getItem('LAYOUT') as ViewType) ?? ViewType.GALLERY,
  )

  const onSetLayout = (newLayout: ViewType) => {
    localStorage.setItem('LAYOUT', newLayout)
    setLayout(newLayout)
  }

  const listItems = useMemo(() => {
    const ItemComponent = Layout === ViewType.LIST ? ListViewItem : GalleryViewItem
    return (
      <ListItems layout={Layout}>
        {ships?.map((ship, index) => {
          const isLast = index === ships.length - 1
          return <ItemComponent key={ship.id} {...ship} ref={isLast ? ref : undefined} />
        })}
      </ListItems>
    )
  }, [ships, Layout])

  if (error) return <ErrorScreen retry={refetchData} />

  return (
    <AppLayout>
      <ListContainer maxWidth='xl'>
        <FiltersBar layout={Layout} setLayout={onSetLayout} typeOptions={typeOptions} />
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

export default Ships
