export type Ship = {
  id: string
  image: string
  class: string
  name: string
  home_port: string
  type: string
  year_built: number
  active: boolean
  roles: string[]
  missions: Array<{ name: string }>
}

export type ShipsResult = {
  result: {
    totalCount: number
  }
}
export type Ships = Array<Ship>

export enum ShipType {
  CRAFT = 'High Speed Craft',
  CARGO = 'Cargo',
  BARGE = 'Barge',
  ALL = 'All',
}
