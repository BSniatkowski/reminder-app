import { ButtonWrapper } from '@renderer/components/atoms/Button/Button.style'
import { css, styled } from 'styled-components'
import { DateWidgetWrapper } from '../Shared.style'

export const CalendarWidgetWrapper = styled(DateWidgetWrapper)`
  --itemSize: 2.4rem;

  flex-direction: column;
  row-gap: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
`

export const DateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > ${ButtonWrapper} {
    padding: 0 0.5rem;
    background-color: ${({ theme }) => theme.palette.simple.secondary};

    &:hover {
      background-color: ${({ theme }) => theme.palette.simple.hover};
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
  width: var(--itemSize);
  text-align: center;
`

export const DaysWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 0.5rem;

  height: calc(8 * (var(--itemSize) - 1rem));
  width: calc(7 * (var(--itemSize) + 0.5rem) - 0.5rem);
`

export const DayElement = styled.div<{ $isSelected: boolean; $disabled: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(var(--itemSize) - 1rem);
  width: var(--itemSize);
  background-color: ${({ theme }) => theme.palette.simple.secondary};

  ${({ theme, $disabled }) =>
    $disabled
      ? css`
          pointer-events: none;
          background-color: ${theme.palette.simple.disabled};
        `
      : css`
          box-shadow: ${({ theme }) => theme.boxShadow.primary};
          cursor: pointer;

          &:hover {
            background-color: ${theme.palette.simple.hover};
          }
        `}

  ${({ theme, $isSelected }) =>
    $isSelected &&
    css`
      background-color: ${theme.palette.simple.delete};
    `}

  & > span {
    padding: 0 !important;
    font-weight: 500;
  }
`

export const EmptyDayElement = styled.div`
  height: calc(var(--itemSize) - 1rem);
  width: var(--itemSize);
`
