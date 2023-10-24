import { css, styled } from 'styled-components'
import { ICheckboxWrapperProps } from './Checkbox.types'
import { SLabel } from '@renderer/components/atoms/Label/Label.style'

export const CheckboxTile = styled.div`
  position: relative;
  margin: calc(var(--size) * 0.2);
  height: calc(var(--size) * 0.8);
  width: calc(var(--size) * 0.8);
  border: solid 2px ${({ theme }) => theme.palette.simple.text};

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 60%;
    width: 60%;
    background-color: ${({ theme }) => theme.palette.simple.text};
    transition: opacity 100ms ease-in;
  }
`

export const CheckboxWrapper = styled.div<ICheckboxWrapperProps>`
  position: relative;
  cursor: pointer;
  display: flex;
  transition: filter 100ms ease-in;
  padding: 2.4rem 0.4rem 0.4rem 0.4rem;
  width: 100%;
  user-select: none;
  --size: 2rem;

  ${({ $disabled }) =>
    $disabled &&
    css`
      filter: grayscale(1) opacity(0.9);
    `}

  & > ${SLabel} {
    position: relative;
    line-height: 1em;
    top: 0;
    left: 0;
  }

  & > ${CheckboxTile} {
    &::after {
      opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
    }
  }

  &:hover > ${CheckboxTile} {
    &::after {
      opacity: ${({ $isActive }) => ($isActive ? 1 : 0.1)};
    }
  }
`
