import { css, styled } from 'styled-components'
import { ETileContentDirections, ETileSizes, ITileWrapperProps } from './Tile.types'

export const TileWrapper = styled.div<ITileWrapperProps>`
  position: relative;
  display: flex;
  align-items: ${({ $alignItems = 'center' }) => $alignItems};
  justify-content: ${({ $justifyContent = 'center' }) => $justifyContent};
  ${({ $nowrap }) =>
    $nowrap
      ? css`
          flex-wrap: nowrap;
        `
      : css`
          flex-wrap: wrap;
          min-width: 1%;
        `};
  color: ${({ theme }) => theme.palette.primary};

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
      `,
      [ETileSizes.full]: css`
        width: 100%;
        padding: ${theme.spacing.normal}rem;
        gap: ${theme.spacing.normal}rem;
        border-radius: ${theme.borderRadius.primary}rem;
      `
    })[$size]}

  ${({ $transparent, theme }) =>
    $transparent
      ? css`
          border-radius: 0;
        `
      : css`
          background-color: ${theme.palette.white};
          border: ${theme.border.primary};
          box-shadow: ${theme.boxShadow.heavy};
        `};
`
