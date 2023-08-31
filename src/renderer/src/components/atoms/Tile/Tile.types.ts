export enum ETileSizes {
  small,
  normal
}

export enum ETileContentDirections {
  row,
  column
}

export interface ITileProps {
  size?: ETileSizes
  contentDirection?: ETileContentDirections
  children: React.ReactNode
}

export interface IITileWrapperProps {
  $size?: ETileSizes
  $contentDirection?: ETileContentDirections
}
