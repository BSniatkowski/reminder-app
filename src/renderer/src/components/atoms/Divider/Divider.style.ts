import { styled } from 'styled-components'

export const SDivider = styled.div`
  position: relative;
  width: 100%;
  height: ${({ theme }) => theme.spacing.small / 2}rem;
  margin: ${({ theme }) => theme.spacing.normal}rem 0;
  border-radius: ${({ theme }) => theme.borderRadius.primary}rem;
  background-color: ${({ theme }) => theme.palette.primary};

  & > span {
    position: absolute;
    width: max-content !important;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${({ theme }) => theme.palette.primary};
    background-color: ${({ theme }) => theme.palette.white};
    font-size: 1.2rem;
  }
`
