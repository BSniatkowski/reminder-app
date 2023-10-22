import { styled } from 'styled-components'

export const SDivider = styled.div`
  position: relative;
  width: 100%;
  height: 2px;
  border-radius: ${({ theme }) => theme.borderRadius.primary}rem;
  background-color: ${({ theme }) => theme.palette.simple.primary};

  & > span {
    position: absolute;
    width: max-content !important;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${({ theme }) => theme.palette.simple.primary};
    background-color: ${({ theme }) => theme.palette.simple.white};
    font-size: 1.2rem;
  }
`
