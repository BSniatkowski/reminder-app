import styled from 'styled-components'

export const LayoutWrapper = styled.div`
  padding-top: ${({ theme }) => theme.spacing.normal * 7}rem;
  background-color: ${({ theme }) => theme.palette.white};
`

export const LayoutInsideWrapper = styled.div`
  min-height: calc(100vh - ${({ theme }) => theme.spacing.normal * 8}rem);
  padding: 0 ${({ theme }) => theme.spacing.normal * 2}rem ${({ theme }) => theme.spacing.normal}rem;
  background-color: ${({ theme }) => theme.palette.white};
`
