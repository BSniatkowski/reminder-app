import { TileWrapper } from '@renderer/components/atoms/Tile/Tile.style'
import { ETileContentDirections, ETileSizes } from '@renderer/components/atoms/Tile/Tile.types'
import { css, styled } from 'styled-components'
import { ICheckboxTileProps, ICheckboxWrapperProps } from './Checkbox.types'
import { SLabel } from '@renderer/components/atoms/Label/Label.style'

export const CheckboxWrapper = styled(TileWrapper).attrs<ICheckboxWrapperProps>({
  $transparent: true,
  $contentDirection: ETileContentDirections.row,
  $justifyContent: 'space-between',
  $alignItems: 'flex-start',
  $size: ETileSizes.full
})`
  --size: 2.2rem;
  padding-top: ${({ theme }) => theme.spacing.normal + 1.4}rem;
  cursor: pointer;
  transition: filter 100ms ease-in;

  ${({ $disabled }) =>
    $disabled &&
    css`
      filter: grayscale(1) opacity(0.9);
    `}

  & > ${SLabel} {
    transform: translateX(var(--size));
  }
`

export const CheckboxTile = styled.div<ICheckboxTileProps>`
  position: relative;
  margin: calc(var(--size) * 0.2);
  height: calc(var(--size) * 0.8);
  width: calc(var(--size) * 0.8);
  border: ${({ theme }) => theme.border.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.primary}rem;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 60%;
    width: 60%;
    border-radius: ${({ theme }) => theme.borderRadius.primary}rem;
    background-color: ${({ theme }) => theme.palette.primary};
    opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
    transition: opacity 100ms ease-in;
  }

  &:hover {
    &::after {
      opacity: ${({ $isActive }) => ($isActive ? 1 : 0.1)};
    }
  }
`
