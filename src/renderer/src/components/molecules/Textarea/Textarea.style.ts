import { styled } from 'styled-components'
import { STextInput, TextInputWrapper } from '../TextInput/TextInput.style'

export const TextareaWrapper = styled(TextInputWrapper)``

export const STextarea = styled(STextInput).attrs({ as: 'textarea', rows: 5 })`
  resize: none;
  border-left: ${({ theme }) => theme.border.secondary};
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius.primary}rem;
  line-height: 1.4rem;
`
