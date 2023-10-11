import styled from 'styled-components'

export const LayoutWrapper = styled.div`
  padding-top: ${({ theme }) => theme.spacing.normal * 7}rem;
  background-color: ${({ theme }) => theme.palette.white};
`

export const LayoutInsideWrapper = styled.div`
  min-height: calc(100vh - ${({ theme }) => theme.spacing.normal * 7}rem);
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.normal}rem ${({ theme }) => theme.spacing.normal * 2}rem;
  background-color: ${({ theme }) => theme.palette.white};
`
