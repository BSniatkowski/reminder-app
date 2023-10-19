import { css, styled } from 'styled-components'
import { EListDirections, IListWrapper } from './List.types'

export const ListWrapper = styled.div<IListWrapper>`
  display: flex;
  padding: ${({ theme }) => theme.spacing.normal}rem;
  gap: ${({ theme }) => theme.spacing.normal}rem;

  ${({ $direction }) =>
    $direction === EListDirections.column
      ? css`
          flex-direction: column;
          & > *:last-of-type {
            margin-bottom: ${({ theme }) => theme.spacing.normal}rem;
          }
        `
      : css`
          flex-direction: row;
        `};
  ${({ $wrap = false, $direction = EListDirections.row }) =>
    $wrap
      ? css`
          flex-wrap: wrap;
        `
      : css`
          flex-wrap: nowrap;
          ${$direction === EListDirections.row
            ? css`
                overflow-x: auto;
                overflow-y: hidden;
              `
            : css`
                overflow-x: hidden;
                overflow-y: auto;
              `}
        `};
`
