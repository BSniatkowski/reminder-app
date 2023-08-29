export enum ETileSizes {
  small,
  normal
}

export enum ETileContentDirections {
  row,
  column
}

export interface ITile {
  size?: ETileSizes
  contentDirection?: ETileContentDirections
  children: React.ReactNode
}

export interface IITileWrapper {
  $size?: ETileSizes
  $contentDirection?: ETileContentDirections
}
