import styled from 'styled-components'

export const LayoutWrapper = styled.div`
  height: 100vh;
  padding: ${({ theme }) => theme.spacing.normal}rem;
  background-color: ${({ theme }) => theme.palette.background.primary};
`

export const LayoutInsideWrapper = styled.div``
