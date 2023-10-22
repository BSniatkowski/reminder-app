import { IconOverrideWrapper } from '@renderer/components/atoms/Icon/Icon.style'
import { keyframes, styled } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }`

export const PopupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  height: 100vh;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.primary}rem;
  background-color: ${({ theme }) => theme.palette.simple.white};
  animation: 300ms ${fadeIn} linear;

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

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 1rem;
  padding: 1rem 0;
`
