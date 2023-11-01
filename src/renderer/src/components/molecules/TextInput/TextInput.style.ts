import { styled } from 'styled-components'

export const TextInputWrapper = styled.div`
  position: relative;
  min-width: 30rem;
  width: 100%;
  padding-top: 2.4rem;
`

export const STextInput = styled.input`
  height: 3.2rem;
  width: 100%;
  padding: 0.4rem;
  border: none;
  border-bottom: solid 0.2rem ${({ theme }) => theme.palette.simple.text};
  background: transparent;
  outline: none;
  line-height: 1em;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.palette.simple.text};

  &::placeholder {
    color: ${({ theme }) => theme.palette.simple.text};
  }
`
