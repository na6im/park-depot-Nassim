import { useEffect, useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import { GET_SHIPS } from '../queries'
import { useIntersection } from './useIntersection'
import { Ships, ShipType } from '../types'

export function useGetShips() {
  const [loadingMore, setLoadingMore] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [shipType, setType] = useState<ShipType>(ShipType.ALL)

  const [getShips, { data, loading, fetchMore, error, refetch }] = useLazyQuery<
    { ships: Ships },
    { limit: number; offset: number; find: { type: string } }
  >(GET_SHIPS, {
    variables: {
      limit: 10,
      offset: 0,
      find: { type: shipType === ShipType.ALL ? '' : shipType },
    },
  })

  const onNexPage = async () => {
    if (loadingMore || !hasMore) return

    setLoadingMore(true)

    await fetchMore({
      variables: {
        offset: data?.ships?.length,
        limit: 10,
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          setHasMore(false)
          return prevResult
        }
        const prevData = prevResult.ships
        const moreData = fetchMoreResult.ships

        fetchMoreResult.ships = [...prevData, ...moreData]
        setLoadingMore(false)

        if (prevData.length === fetchMoreResult.ships.length) setHasMore(false)
        return fetchMoreResult
      },
    })
  }

  const ref = useIntersection(onNexPage)

  const refetchData = () => {
    setHasMore(true)
    refetch({ limit: 10, offset: 0, find: { type: shipType ?? '' } })
  }

  useEffect(() => {
    getShips()
  }, [])

  useEffect(() => {
    setHasMore(true)
  }, [shipType])

  return {
    ref,
    ships: data?.ships,
    loading,
    error,
    loadingMore,
    refetchData,
    typeOptions: { shipType, setType },
  }
}
