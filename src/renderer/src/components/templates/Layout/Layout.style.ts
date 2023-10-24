import styled from 'styled-components'

export const LayoutWrapper = styled.div`
  -webkit-app-region: drag;
  height: calc(100vh - 3rem);
  overflow: hidden;
  padding: 1rem;
  margin-top: 3rem;
  background-color: ${({ theme }) => theme.palette.background.primary};
`

export const LayoutInsideWrapper = styled.div`
  -webkit-app-region: no-drag;
  height: 100%;
`

export const ContentWrapper = styled.section`
  position: relative;
  display: inline-block;
  vertical-align: top;
  height: 100%;
  width: calc(100% - 14rem - 2rem);
  margin-left: 2rem;
  background: ${({ theme }) => theme.palette.gradients.section};
  border-radius: ${({ theme }) => theme.borderRadius.primary}rem;
  overflow-y: scroll;
  overflow-x: hidden;
`
