import styled from 'styled-components'
import { IDateWidgetWrapperProps } from './Shared.types'

export const DateWidgetWrapper = styled.div<IDateWidgetWrapperProps>`
  display: ${({ $isVisible }) => ($isVisible ? 'flex' : 'none')};
  position: absolute;
  z-index: 9998;
  bottom: 100%;
  right: 0;
  user-select: none;
  padding: 1rem;
  background-color: ${({ theme }) => theme.palette.simple.primary};
  border-radius: ${({ theme }) => theme.borderRadius.secondary}rem;
  box-shadow: ${({ theme }) => theme.boxShadow.primary};
  color: ${({ theme }) => theme.palette.simple.text};
`
