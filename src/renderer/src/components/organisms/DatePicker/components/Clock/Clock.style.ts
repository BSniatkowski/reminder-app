import styled from 'styled-components'
import { ISliderProps } from './Clock.types'

export const Slider = styled.div<ISliderProps>`
  --itemSize: ${({ $itemSize }) => $itemSize}rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-height: var(--itemSize);
  scroll-behavior: smooth;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const SliderItem = styled.div`
  height: calc(var(--itemSize) * 1.5rem);
  width: calc(var(--itemSize) * 1.5rem);
  text-align: center;
  font-size: var(--itemSize);
`
