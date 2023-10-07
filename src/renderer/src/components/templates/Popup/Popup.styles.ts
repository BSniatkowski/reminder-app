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
  height: calc(260px - 0.2rem);
  width: calc(100% - 0.2rem);
  font-size: ${maxFontsize}px;
  animation: 300ms ${fadeIn} linear;

  & > p {
    overflow-y: auto;
    overflow-x: hidden;
  }
`
