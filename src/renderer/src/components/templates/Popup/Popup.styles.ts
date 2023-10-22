import { keyframes, styled } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }`

export const PopupWrapper = styled.div`
  min-height: 100vh;
  height: fit-content;
  animation: 300ms ${fadeIn} linear;

  & > p {
    overflow-y: auto;
    overflow-x: hidden;
  }

  & > iframe {
    height: calc(100vh - 2rem);
    width: 100%;
  }
`
