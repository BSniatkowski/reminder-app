import { TextInputWrapper } from '@renderer/components/molecules/TextInput/TextInput.style'
import styled from 'styled-components'

export const SelectInputWrapper = styled(TextInputWrapper)``

export const SelectedItem = styled.div``

export const Options = styled.div<{ $isCollapsed: boolean }>`
  display: ${({ $isCollapsed }) => ($isCollapsed ? 'none' : 'flex')};
  flex-direction: column;
  gap: 1rem;
`

export const OptionItem = styled.div``
