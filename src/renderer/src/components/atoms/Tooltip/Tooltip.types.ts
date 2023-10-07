export enum ETooltipArrowDirections {
  LEFT,
  TOP,
  RIGHT,
  BOTTOM
}

export interface ITooltipProps {
  text: string
  isVisible: boolean
  positionX: number
  positionY: number
  arrowDirection: ETooltipArrowDirections
}

export interface ITooltipWrapper {
  $isVisible: boolean
  $positionX: number
  $positionY: number
}

export interface ITooltipArrow {
  $arrowDirection: ETooltipArrowDirections
}
