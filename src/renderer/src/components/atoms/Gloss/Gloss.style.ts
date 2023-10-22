import styled, { keyframes } from 'styled-components'

const glossOpacity = keyframes`
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
`

export const GlossDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.palette.gradients.gloss};
  pointer-events: none;
  opacity: 1;
  animation: 0.1s ${glossOpacity} ease-out;
`
