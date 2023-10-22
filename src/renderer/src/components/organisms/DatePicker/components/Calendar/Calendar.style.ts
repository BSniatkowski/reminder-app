import { ButtonWrapper } from '@renderer/components/atoms/Button/Button.style'
import { styled } from 'styled-components'
import { DateWidgetWrapper } from '../Shared.style'

export const CalendarWidgetWrapper = styled(DateWidgetWrapper)`
  --itemSize: 3rem;
`

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: 1rem;
  font-size: 1.2rem;
  font-weight: 700;

  & > ${ButtonWrapper} {
    background-color: ${({ theme }) => theme.palette.simple.primary};

    &:hover {
      background-color: ${({ theme }) => theme.palette.simple.secondary};
    }
  }
`

export const WeekdaysWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
  gap: 0.5rem;

  height: fit-content;
  width: calc(7 * (var(--itemSize) + 0.5rem) - 0.5rem);
`

export const DayShort = styled.div`
  padding: calc(var(--itemSize) * 1 / 5);
  width: var(--itemSize);
  opacity: 0.7;
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.simple.primary};
`

export const DaysWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 0.5remrem;

  --itemSize: 3rem;
  height: calc(6 * (var(--itemSize) * 4 / 5 + 0.5rem));
  width: calc(7 * (var(--itemSize) + 0.5rem) - 0.5rem);

  & > ${ButtonWrapper} {
    height: calc(var(--itemSize) * 4 / 5);
    width: var(--itemSize);

    & > span {
      padding: 0 !important;
      font-weight: 500;
    }
  }
`

export const EmptyDayElement = styled.div`
  height: calc(var(--itemSize) * 4 / 5);
  width: var(--itemSize);
`
