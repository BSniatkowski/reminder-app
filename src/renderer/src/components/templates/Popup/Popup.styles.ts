import { IconOverrideWrapper } from '@renderer/components/atoms/Icon/Icon.style'
import { css, keyframes, styled } from 'styled-components'
import { IButtonsContainerProps, IPopupWrapperProps } from './Popup.types'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }`

export const PopupWrapper = styled.div<IPopupWrapperProps>`
  display: flex;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.primary}rem;
  background-color: ${({ theme }) => theme.palette.simple.white};
  animation: 300ms ${fadeIn} linear;
  gap: 1rem;

  ${({ $isSmall, $withVideo }) =>
    $isSmall
      ? css`
          justify-content: space-between;
        `
      : css`
          flex-direction: column;

          ${$withVideo
            ? css`
                height: fit-content;
                overflow-y: auto;
                overflow-x: hidden;
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
              `
            : css`
                height: 100vh;
              `}

          & > iframe {
            height: calc(100vh - 2rem);
            width: 100%;
          }

          & > a {
            font-size: 1.6rem;
            font-weight: 600;
          }

          & > p {
            height: 21rem;
            overflow-y: auto;
            overflow-x: hidden;
            padding-right: 1rem;
            font-size: 1.6rem;
            font-weight: 400;
            color: ${({ theme }) => theme.palette.simple.primary};
          }
        `}
`

export const TitleWithIcon = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.6rem;

  & > * {
    color: ${({ theme }) => theme.palette.simple.primary};
    font-weight: 500;
  }

  & > ${IconOverrideWrapper} svg > path {
    fill: ${({ theme }) => theme.palette.simple.primary};
  }
`

export const ButtonsContainer = styled.div<IButtonsContainerProps>`
  display: flex;
  justify-content: flex-end;
  column-gap: 1rem;
  padding: ${({ $isSmall }) => ($isSmall ? 0 : '1rem')} 0;
`
