import { TileWrapper } from '@renderer/components/atoms/Tile/Tile.style'
import { ETileContentDirections, ETileSizes } from '@renderer/components/atoms/Tile/Tile.types'
import { styled } from 'styled-components'

export const TextInputWrapper = styled(TileWrapper).attrs({
  $transparent: true,
  $contentDirection: ETileContentDirections.column,
  $justifyContent: 'space-between',
  $alignItems: 'flex-start',
  $size: ETileSizes.full
})`
  padding-top: ${({ theme }) => theme.spacing.normal + 1.4}rem;
`

export const STextInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.normal / 2}rem;
  border: none;
  border-bottom: ${({ theme }) => theme.border.secondary};
  outline: none;
  line-height: 1rem;
  font-size: 1.4rem;
`
