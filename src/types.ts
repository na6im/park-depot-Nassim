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

export type Ships = Array<Ship>

export enum ShipType {
  CRAFT = 'High Speed Craft',
  CARGO = 'Cargo',
  BARGE = 'Barge',
  ALL = 'All',
}

export enum ViewType {
  GALLERY = 'gallery',
  LIST = 'list',
}

export interface ItemProps {
  id: string
  image: string
  name: string
  home_port: string
  roles: string[]
  active: boolean
  missions: Array<{ name: string }>
}
