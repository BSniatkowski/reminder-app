export enum ETileSizes {
  small,
  normal,
  full
}

export enum ETileContentDirections {
  row,
  column
}

export interface ITileProps {
  transparent?: boolean
  size?: ETileSizes
  contentDirection?: ETileContentDirections
  justifyContent?: string
  alignItems?: string
  children: React.ReactNode
}

export interface ITileWrapperProps {
  $transparent?: boolean
  $size?: ETileSizes
  $contentDirection?: ETileContentDirections
  $justifyContent?: string
  $alignItems?: string
}
