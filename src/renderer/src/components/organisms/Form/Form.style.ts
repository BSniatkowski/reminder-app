import { css, styled } from 'styled-components'
import { EStyleVariants, IFormInsideWrapperProps } from './Form.types'
import { TextInputWrapper } from '@renderer/components/molecules/TextInput/TextInput.style'
import { CheckboxWrapper } from '@renderer/components/molecules/Checkbox/Checkbox.style'

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2rem;
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
      `,
      [EStyleVariants.search]: css`
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0 4rem;
        height: fit-content;
        padding-bottom: 2rem;

        & > ${TextInputWrapper} {
          width: fit-content;
        }

        & > ${CheckboxWrapper} {
          width: fit-content;
        }
      `
    })[$styleVariant]}
`

export const ActionButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 2rem 0;
  gap: 1rem;
`
