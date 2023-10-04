import { TileWrapper } from '@renderer/components/atoms/Tile/Tile.style'
import { maxFontsize } from '@renderer/components/theme/GlobalStyle/typographyCSS'
import { styled } from 'styled-components'

export const PopupWrapper = styled(TileWrapper)`
  height: calc(260px - 0.2rem);
  width: calc(100% - 0.2rem);
  font-size: ${maxFontsize}px;

  & > p {
    overflow-y: auto;
    overflow-x: hidden;
  }
`
