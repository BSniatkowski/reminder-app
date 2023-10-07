import { css, styled } from 'styled-components'
import { ETooltipArrowDirections, ITooltipArrow, ITooltipWrapper } from './Tooltip.types'

export const TooltipWrapper = styled.div<ITooltipWrapper>`
  position: fixed;
  z-index: 9998;
  pointer-events: none;
  padding: ${({ theme }) => theme.spacing.normal}rem;
  border-radius: ${({ theme }) => theme.borderRadius.primary}rem;
  background-color: ${({ theme }) => theme.palette.primary};
  color: ${({ theme }) => theme.palette.white};
  opacity: ${({ $isVisible }) => ($isVisible ? 0.9 : 0)};

  left: ${({ $positionX }) => $positionX}px;
  top: ${({ $positionY }) => $positionY}px;

  transition-property: opacity, left, top;
  transition-duration: 300ms;
  transition-timing-function: ease-in;
`

export const TooltipArrow = styled.div<ITooltipArrow>`
  position: absolute;
  width: 0;
  height: 0;
  --arrSize: ${({ theme }) => theme.spacing.normal}rem;

  ${({ theme, $arrowDirection = ETooltipArrowDirections.LEFT }) =>
    ({
      [ETooltipArrowDirections.LEFT]: css`
        top: 50%;
        right: 100%;
        transform: translateY(-50%);
        border-top: var(--arrSize) solid transparent;
        border-bottom: var(--arrSize) solid transparent;
        border-right: var(--arrSize) solid ${theme.palette.primary};
      `,
      [ETooltipArrowDirections.TOP]: css`
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-left: var(--arrSize) solid transparent;
        border-right: var(--arrSize) solid transparent;
        border-bottom: var(--arrSize) solid ${theme.palette.primary};
      `,
      [ETooltipArrowDirections.RIGHT]: css`
        top: 50%;
        left: 100%;
        transform: translateY(-50%);
        border-top: var(--arrSize) solid transparent;
        border-bottom: var(--arrSize) solid transparent;
        border-left: var(--arrSize) solid ${theme.palette.primary};
      `,
      [ETooltipArrowDirections.BOTTOM]: css`
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-left: var(--arrSize) solid transparent;
        border-right: var(--arrSize) solid transparent;
        border-top: var(--arrSize) solid ${theme.palette.primary};
      `
    })[$arrowDirection]}
`
