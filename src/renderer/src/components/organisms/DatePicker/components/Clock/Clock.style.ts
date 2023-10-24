import styled from 'styled-components'
import { ISliderProps, TSliderItemInputProps } from './Clock.types'
import { STextInput } from '@renderer/components/molecules/TextInput/TextInput.style'
import { DateWidgetWrapper } from '../Shared.style'

export const ClockWidgetWrapper = styled(DateWidgetWrapper)`
  column-gap: 1rem;
`

export const Slider = styled.div<ISliderProps>`
  --itemSize: ${({ $itemSize }) => $itemSize}rem;
  display: ${({ $display }) => ($display ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: flex-start;
  max-height: var(--itemSize);
  scroll-behavior: smooth;
  overflow-y: scroll;
  overflow-x: hidden;
  cursor: pointer;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const SliderItem = styled.div`
  height: calc(var(--itemSize) * 1.5);
  width: calc(var(--itemSize) * 1.2);
  text-align: center;
  font-size: var(--itemSize);
`

export const SliderItemInput = styled(STextInput).attrs({
  type: 'number',
  min: 0
})<TSliderItemInputProps>`
  height: ${({ $itemSize }) => $itemSize}rem;
  width: calc(${({ $itemSize }) => $itemSize}rem * 1.2);
  padding: 0;
  text-align: center;
  font-size: ${({ $itemSize }) => $itemSize}rem;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
