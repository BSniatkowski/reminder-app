import { styled } from 'styled-components'
import { STextInput, TextInputWrapper } from '../TextInput/TextInput.style'

export const TextareaWrapper = styled(TextInputWrapper)``

export const STextarea = styled(STextInput).attrs({ as: 'textarea', rows: 3 })`
  resize: none;
  border-left: solid 2px ${({ theme }) => theme.palette.simple.text};
  line-height: 2.4rem;
`
