import { TileWrapper } from '@renderer/components/atoms/Tile/Tile.style'
import { ETileContentDirections, ETileSizes } from '@renderer/components/atoms/Tile/Tile.types'
import styled, { css } from 'styled-components'
import { IDateWidgetWrapperProps } from './Shared.types'

export const DateWidgetWrapper = styled(TileWrapper).attrs({
  $contentDirection: ETileContentDirections.column,
  $size: ETileSizes.small
})<IDateWidgetWrapperProps>`
  ${({ $isVisible }) =>
    !$isVisible &&
    css`
      display: none;
    `};

  position: absolute;
  z-index: 9998;
  top: 100%;
  right: 0;
`
