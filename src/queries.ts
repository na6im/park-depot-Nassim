import { gql } from '@apollo/client'

export const GET_SHIPS = gql`
  query ships($limit: Int, $offset: Int) {
    ships(limit: $limit, offset: $offset) {
      image
      class
      name
      active
      home_port
      image
    }
  }
`
