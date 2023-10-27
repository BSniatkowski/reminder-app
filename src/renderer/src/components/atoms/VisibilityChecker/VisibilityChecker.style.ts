import styled, { css } from 'styled-components'
import { IFixedWrapperProps } from './VisibilityChecker.types'

export const FixedWrapper = styled.div<IFixedWrapperProps>`
  ${({ $isVisible, $top, $left }) =>
    !$isVisible &&
    css`
      position: absolute;
      top: ${$top};
      left: ${$left};

      & > * {
        position: relative;
        top: unset;
        right: unset;
        bottom: unset;
        left: unset;
      }
    `}
`
