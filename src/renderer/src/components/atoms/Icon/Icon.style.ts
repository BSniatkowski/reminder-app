import styled from 'styled-components'
import { IconOverrideWrapperProps } from './Icon.types'

export const IconOverrideWrapper = styled.div<IconOverrideWrapperProps>`
  & > svg {
    height: ${({ $height }) => $height || '100%'};
    width: 100%;

    & > path {
      fill: ${({ $isActive, $color, $activeColor }) => ($isActive ? $activeColor : $color)};
      transition: fill 100ms;
    }
  }
`
