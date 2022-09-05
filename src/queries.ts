import { gql } from '@apollo/client'

export const GET_SHIPS = gql`
  query ships($limit: Int, $offset: Int) {
    ships(limit: $limit, offset: $offset) {
      id
      image
      class
      name
      active
      home_port
      image
    }
  }
`

export const GET_SHIP = gql`
  query ship($id: Int) {
    ship(id: $id) {
      image
      class
      name
      active
      home_port
      image
    }
  }
`
