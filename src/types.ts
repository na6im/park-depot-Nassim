export type Ship = {
  id: string
  image: string
  class: string
  name: string
  home_port: string
}

export type ShipsResult = {
  result: {
    totalCount: number
  }
}
export type Ships = Array<Ship>
