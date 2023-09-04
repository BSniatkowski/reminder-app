export enum EDecorationSizes {
  small,
  normal
}

export interface IDecorationProps {
  size?: EDecorationSizes
  color?: string
  animate?: boolean
}

export interface IDecorationDivProps {
  $size?: EDecorationSizes
  $color?: string
  $animate?: boolean
}
