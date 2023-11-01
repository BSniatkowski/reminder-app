import {
  STextInput,
  TextInputWrapper
} from '@renderer/components/molecules/TextInput/TextInput.style'
import styled, { css } from 'styled-components'
import { ISelectedItemProps } from './SelectInput.types'

export const SelectInputWrapper = styled(TextInputWrapper)``

export const SelectedItem = styled(STextInput).attrs({ as: 'div' })<ISelectedItemProps>`
  cursor: pointer;
  transition: background-color 100ms ease-out;

  ${({ theme, $isCollapsed }) =>
    !$isCollapsed &&
    css`
      background-color: ${theme.palette.simple.hover};
    `}

  &:hover {
    background-color: ${({ theme }) => theme.palette.simple.hover};
  }
`

export const Options = styled.div<{ $isCollapsed: boolean }>`
  position: absolute;
  z-index: 1;
  top: calc(100% + 0.5rem);
  left: 0;
  display: ${({ $isCollapsed }) => ($isCollapsed ? 'none' : 'flex')};
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.palette.background.secondary};
  box-shadow: ${({ theme }) => theme.boxShadow.primary};
`

export const OptionItem = styled.div`
  height: fit-content;
  padding: 0.7rem 0.4rem;
  font-size: 2.4rem;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.simple.textDark};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.palette.background.primary};
  }
`
