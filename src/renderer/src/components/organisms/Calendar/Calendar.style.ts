import { ButtonWrapper } from '@renderer/components/atoms/Button/Button.style'
import { TileWrapper } from '@renderer/components/atoms/Tile/Tile.style'
import { ETileContentDirections, ETileSizes } from '@renderer/components/atoms/Tile/Tile.types'
import { styled } from 'styled-components'

export const CalendarWrapper = styled(TileWrapper).attrs({
  $contentDirection: ETileContentDirections.column,
  $size: ETileSizes.small
})``

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: ${({ theme }) => theme.spacing.normal}rem;
  font-size: 1.2rem;
  font-weight: 700;

  & > ${ButtonWrapper} {
    background-color: ${({ theme }) => theme.palette.primary};

    &:hover {
      background-color: ${({ theme }) => theme.palette.secondary};
    }
  }
`

export const DaysWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.small / 2}rem;

  --itemSize: 3rem;
  height: calc(
    5 * (var(--itemSize) + ${({ theme }) => theme.spacing.small / 2}rem) -
      ${({ theme }) => theme.spacing.small}rem
  );
  width: calc(
    7 * (var(--itemSize) + ${({ theme }) => theme.spacing.small / 2}rem) -
      ${({ theme }) => theme.spacing.small / 2}rem
  );

  & > ${ButtonWrapper} {
    width: var(--itemSize);
  }
`
