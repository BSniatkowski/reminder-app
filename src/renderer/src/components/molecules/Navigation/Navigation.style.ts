import { IconOverrideWrapper } from '@renderer/components/atoms/Icon/Icon.style'
import { TileWrapper } from '@renderer/components/atoms/Tile/Tile.style'
import { styled } from 'styled-components'

export const NavigationWrapper = styled.nav`
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;

  & > ${TileWrapper} {
    border: none;
    border-radius: 0;

    & > ${IconOverrideWrapper} {
      margin-left: 1rem;
    }
  }
`
