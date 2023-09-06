import styled from 'styled-components'

export const LayoutWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.normal * 2}rem;
  padding-top: ${({ theme }) => theme.spacing.normal * 8}rem;
  background-color: ${({ theme }) => theme.palette.white};
`
