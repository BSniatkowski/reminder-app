import { css, styled } from 'styled-components'
import { ETileContentDirections, ETileSizes, IITileWrapper } from './Tile.types'

export const TileWrapper = styled.div<IITileWrapper>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.palette.font.primary};
  background-color: ${({ theme }) => theme.palette.background.third};
  box-shadow: ${({ theme }) => theme.boxShadow.heavy};

  flex-direction: ${({ $contentDirection }) =>
    $contentDirection === ETileContentDirections.column ? 'column' : 'row'};

  ${({ $size = ETileSizes.normal, theme }) =>
    ({
      [ETileSizes.small]: css`
        width: fit-content;
        padding: ${theme.spacing.small}rem;
        gap: ${theme.spacing.small}rem;
        border-radius: ${theme.borderRadius.secondary}rem;
      `,
      [ETileSizes.normal]: css`
        width: fit-content;
        padding: ${theme.spacing.normal}rem;
        gap: ${theme.spacing.normal}rem;
        border-radius: ${theme.borderRadius.primary}rem;
      `
    })[$size]}
`
