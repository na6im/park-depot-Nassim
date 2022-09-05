import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_SHIPS } from '../queries'
import { useIntersection } from './useIntersection'
import { Ships, ShipsResult } from '../types'

export function useGetShips() {
  const [loadingMore, setLoadingMore] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  const { data, loading, fetchMore, error, refetch } = useQuery<
    { ships: Ships },
    { limit: number; offset: number }
  >(GET_SHIPS, {
    variables: {
      limit: 10,
      offset: 0,
    },
  })

  const onNexPage = async () => {
    if (loadingMore || !hasMore) return

    setLoadingMore(true)

    console.log(data?.ships?.length)
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

  const refetchData = () => refetch({ limit: 10, offset: 0 })

  return { ref, data, loading, error, loadingMore, refetchData }
}
