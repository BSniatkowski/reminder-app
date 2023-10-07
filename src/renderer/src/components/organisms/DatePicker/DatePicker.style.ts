import { styled } from 'styled-components'
import { STextInput, TextInputWrapper } from '../../molecules/TextInput/TextInput.style'
import { ButtonWrapper } from '@renderer/components/atoms/Button/Button.style'

export const DatePickerWrapper = styled(TextInputWrapper)``

export const DatePickerButtonsWrapper = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.normal}rem;
  right: ${({ theme }) => theme.spacing.normal}rem;

  & > ${ButtonWrapper} {
    display: inline-block;
    padding: 0;
    margin-right: 0.5rem;
  }
`

export const SDatePicker = styled(STextInput)``
