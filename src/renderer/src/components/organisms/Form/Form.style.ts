import { TileWrapper } from '@renderer/components/atoms/Tile/Tile.style'
import { ETileContentDirections, ETileSizes } from '@renderer/components/atoms/Tile/Tile.types'
import { styled } from 'styled-components'

export const FormWrapper = styled(TileWrapper).attrs({
  as: 'form',
  $transparent: true,
  $size: ETileSizes.full,
  $contentDirection: ETileContentDirections.column,
  $alignItems: 'flex-end',
  $justifyContent: 'flex-start'
})`
  max-width: 1200px;
`
