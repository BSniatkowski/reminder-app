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
  transition: filter 100ms ease-in;
  padding: 1.6rem 0.4rem 0.4rem 0.4rem;
  width: 100%;
  --size: 2rem;

  ${({ $disabled }) =>
    $disabled &&
    css`
      filter: grayscale(1) opacity(0.9);
    `}

  & > ${SLabel} {
    transform: translate(calc(var(--size) + 0.4rem), -1.2rem);
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
