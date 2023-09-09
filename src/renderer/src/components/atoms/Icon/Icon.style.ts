import styled from 'styled-components'
import { IconOverrideWrapperProps } from './Icon.types'

export const IconOverrideWrapper = styled.div<IconOverrideWrapperProps>`
  height: ${({ $size }) => $size || '100%'};
  width: ${({ $size }) => $size || '100%'};

  & > svg {
    height: inherit;
    width: inherit;

    & > path {
      fill: ${({ $isActive, $color, $activeColor }) => ($isActive ? $activeColor : $color)};
      transition: fill 100ms;
    }
  }
`
