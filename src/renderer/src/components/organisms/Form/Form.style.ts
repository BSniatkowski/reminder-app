import { css, styled } from 'styled-components'
import { EStyleVariants, IFormInsideWrapperProps } from './Form.types'
import {
  STextInput,
  TextInputWrapper
} from '@renderer/components/molecules/TextInput/TextInput.style'
import {
  CheckboxTile,
  CheckboxWrapper
} from '@renderer/components/molecules/Checkbox/Checkbox.style'
import { SLabel } from '@renderer/components/atoms/Label/Label.style'

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`

export const FormInsideWrapper = styled.div<IFormInsideWrapperProps>`
  display: flex;
  justify-content: flex-start;
  width: 100%;

  ${({ $styleVariant }) =>
    ({
      [EStyleVariants.edit]: css`
        align-items: flex-start;
        flex-direction: column;
        gap: 2rem;
        height: calc(100% - 10rem - 5.4rem);
        padding: 2rem;
      `,
      [EStyleVariants.search]: css`
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0 4rem;
        height: fit-content;
        padding: 2rem 2rem 4rem 2rem;

        & > ${TextInputWrapper} {
          width: fit-content;
        }

        & > ${CheckboxWrapper} {
          width: fit-content;
        }
      `,
      [EStyleVariants.settings]: css`
        align-items: flex-start;
        flex-direction: column;
        gap: 4rem;
        padding: 2rem 0;
        font-weight: 500;

        & > ${TextInputWrapper} > ${SLabel}, & > ${TextInputWrapper} > ${STextInput} {
          color: ${({ theme }) => theme.palette.simple.textDark};
          border-color: ${({ theme }) => theme.palette.simple.textDark};
        }

        & > ${CheckboxWrapper} {
          & > ${CheckboxTile} {
            border-color: ${({ theme }) => theme.palette.simple.textDark};

            &::after {
              background-color: ${({ theme }) => theme.palette.simple.textDark};
            }
          }

          & > ${SLabel} {
            color: ${({ theme }) => theme.palette.simple.textDark};
          }
        }

        & > ${CheckboxWrapper} {
          padding-top: 0;
        }
      `
    })[$styleVariant]}
`

export const ActionButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 2rem;
  gap: 1rem;
`
