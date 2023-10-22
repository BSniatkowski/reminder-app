import { css, styled } from 'styled-components'
import { STextInput, TextInputWrapper } from '../../molecules/TextInput/TextInput.style'
import { ButtonWrapper } from '@renderer/components/atoms/Button/Button.style'
import { EActivePickers, IDatePickerButtonsWrapperProps } from './DatePicker.types'

export const DatePickerWrapper = styled(TextInputWrapper)``

export const DatePickerButtonsWrapper = styled.div<IDatePickerButtonsWrapperProps>`
  position: absolute;
  bottom: 0.4rem;
  right: 0;

  & > ${ButtonWrapper} {
    display: inline-block;
    background: none;
    box-shadow: none;
    padding: 0;
    margin-right: 0.4rem;
  }

  ${({ $activePicker = EActivePickers.none }) =>
    ({
      [EActivePickers.calendar]: css`
        & > ${ButtonWrapper}:nth-child(1) svg path {
          box-shadow: 0 0 4px 0 ${({ theme }) => theme.palette.simple.text};
        }
      `,
      [EActivePickers.clock]: css`
        & > ${ButtonWrapper}:nth-child(2) svg path {
          box-shadow: 0 0 4px 0 ${({ theme }) => theme.palette.simple.text};
        }
      `,
      [EActivePickers.none]: ''
    })[$activePicker]}
`

export const SDatePicker = styled(STextInput)`
  height: 4.3rem;
`
