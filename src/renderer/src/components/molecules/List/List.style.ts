import { css, styled } from 'styled-components'
import { EListDirections, IListWrapper } from './List.types'

export const ListWrapper = styled.div<IListWrapper>`
  display: flex;
  gap: ${({ theme }) => theme.spacing.normal}rem;

  padding: 0.2rem;

  flex-direction: ${({ $direction }) => ($direction === EListDirections.column ? 'column' : 'row')};
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
