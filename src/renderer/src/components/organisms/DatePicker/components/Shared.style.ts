import styled, { css } from 'styled-components'
import { IDateWidgetWrapperProps } from './Shared.types'

export const DateWidgetWrapper = styled.div<IDateWidgetWrapperProps>`
  ${({ $isVisible }) =>
    !$isVisible &&
    css`
      display: none;
    `};

  position: absolute;
  z-index: 9998;
  bottom: 100%;
  right: 0;
  user-select: none;
`
