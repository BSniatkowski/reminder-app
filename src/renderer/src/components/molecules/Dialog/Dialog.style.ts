import { createGlobalStyle, styled } from 'styled-components'
import { IDialogWrapperProps } from './Dialog.types'
import { TileWrapper } from '@renderer/components/atoms/Tile/Tile.style'

export const DialogWrapper = styled.div<IDialogWrapperProps>`
  height: 100vh;
  width: 100vw;
  display: ${({ $isVisible }) => ($isVisible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;

  & > ${TileWrapper} {
    @media screen and (min-width: 420px) {
      width: 80%;
      max-width: 1000px;
    }

    & > h4 {
      width: 100% !important;
    }
  }
`

export const DialogOverlay = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.palette.black};
  opacity: 0.5;
  z-index: -1;
  position: absolute;
`

export const BodyOverflowHidden = createGlobalStyle`
  body { 
    overflow: hidden !important;
    padding-right:  0.5rem;
  }
`
