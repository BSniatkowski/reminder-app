import { styled } from 'styled-components'

export const LinkWrapper = styled.a`
  min-width: 1%;
  width: 100%;
  overflow-wrap: break-word;
  color: ${({ theme }) => theme.palette.link};
`
