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
  column-gap: ${({ theme }) => theme.spacing.normal}rem;
  font-size: 1.2rem;
  font-weight: 700;

  & > ${ButtonWrapper} {
    background-color: ${({ theme }) => theme.palette.primary};

    &:hover {
      background-color: ${({ theme }) => theme.palette.secondary};
    }
  }
`

export const WeekdaysWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
  gap: ${({ theme }) => theme.spacing.small / 2}rem;

  height: fit-content;
  width: calc(
    7 * (var(--itemSize) + ${({ theme }) => theme.spacing.small / 2}rem) -
      ${({ theme }) => theme.spacing.small / 2}rem
  );
`

export const DayShort = styled.div`
  padding: calc(var(--itemSize) * 1 / 5);
  width: var(--itemSize);
  opacity: 0.7;
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.primary};
`

export const DaysWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.small / 2}rem;

  --itemSize: 3rem;
  height: calc(6 * (var(--itemSize) * 4 / 5 + ${({ theme }) => theme.spacing.small / 2}rem));
  width: calc(
    7 * (var(--itemSize) + ${({ theme }) => theme.spacing.small / 2}rem) -
      ${({ theme }) => theme.spacing.small / 2}rem
  );

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
