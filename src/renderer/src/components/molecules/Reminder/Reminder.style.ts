import { styled } from 'styled-components'
import {} from './Reminder.types'
import { IconOverrideWrapper } from '@renderer/components/atoms/Icon/Icon.style'

export const BackgroundWrapper = styled.div`
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  opacity: 0.1;

  & > ${IconOverrideWrapper} {
    transform: translate(30%, 10%) rotate(15deg);
  }
`
