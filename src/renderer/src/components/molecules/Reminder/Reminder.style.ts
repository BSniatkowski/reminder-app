import { styled } from 'styled-components'
import {} from './Reminder.types'
import { IconOverrideWrapper } from '@renderer/components/atoms/Icon/Icon.style'

export const ReminderInsideWrapper = styled.div`
  display: flex;
  height: 12rem;
  width: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.simple.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.secondary}rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  cursor: pointer;
  transition: transform 100ms ease-in;
`

export const ReminderWrapper = styled.div`
  position: relative;
  transform-origin: top;
  transform: perspective(10rem);
  min-width: 42rem;

  &:hover ${ReminderInsideWrapper} {
    transform: perspective(10rem) rotateX(2deg);
  }
`

export const ReminderIconTileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  aspect-ratio: 1;
  background: ${({ theme }) => theme.palette.simple.primary};
  box-shadow: ${({ theme }) => theme.boxShadow};

  & > ${IconOverrideWrapper} {
    transform: rotate(20deg);
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`
