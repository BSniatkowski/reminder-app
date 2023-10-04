import { TileWrapper } from '@renderer/components/atoms/Tile/Tile.style'
import { maxFontsize } from '@renderer/components/theme/GlobalStyle/typographyCSS'
import { styled } from 'styled-components'

export const PopupWrapper = styled(TileWrapper)`
  height: 320px;
  font-size: ${maxFontsize}px;

  & > p {
    overflow-y: auto;
    overflow-x: hidden;
  }
`
