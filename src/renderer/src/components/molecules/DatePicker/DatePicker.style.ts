import { styled } from 'styled-components'
import { STextInput, TextInputWrapper } from '../TextInput/TextInput.style'
import { ButtonWrapper } from '@renderer/components/atoms/Button/Button.style'

export const DatePickerWrapper = styled(TextInputWrapper)``

export const DatePickerButtonsWrapper = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.small}rem;
  right: ${({ theme }) => theme.spacing.small}rem;

  & > ${ButtonWrapper} {
    display: inline-block;
  }
`

export const SDatePicker = styled(STextInput)``
