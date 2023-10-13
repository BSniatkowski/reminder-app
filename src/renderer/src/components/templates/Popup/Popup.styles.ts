import { TileWrapper } from '@renderer/components/atoms/Tile/Tile.style'
import { maxFontsize } from '@renderer/components/theme/GlobalStyle/typographyCSS'
import { keyframes, styled } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }`

export const PopupWrapper = styled(TileWrapper)`
  min-height: 100vh;
  height: fit-content;
  font-size: ${maxFontsize}px;
  animation: 300ms ${fadeIn} linear;

  & > p {
    overflow-y: auto;
    overflow-x: hidden;
  }

  & > iframe {
    height: calc(100vh - ${({ theme }) => theme.spacing.normal * 2}rem);
    width: 100%;
  }
`
