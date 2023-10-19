import { styled } from 'styled-components'

export const TextInputWrapper = styled.div`
  padding-top: ${({ theme }) => theme.spacing.normal + 1.4}rem;
`

export const STextInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.normal / 2}rem;
  border: none;
  border-bottom: ${({ theme }) => theme.border.secondary};
  outline: none;
  line-height: 1rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.palette.simple.text};

  &::placeholder {
    color: ${({ theme }) => theme.palette.simple.text};
  }
`
