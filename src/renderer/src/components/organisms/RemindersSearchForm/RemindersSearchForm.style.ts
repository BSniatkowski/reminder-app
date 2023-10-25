import styled from 'styled-components'
import { IRemindersSearchFormModalProps } from './RemindersSearchForm.types'
import { IconOverrideWrapper } from '@renderer/components/atoms/Icon/Icon.style'

export const RemindersSearchFormModal = styled.div<IRemindersSearchFormModalProps>`
  position: fixed;
  z-index: 9996;
  bottom: 1rem;
  left: calc(14rem + 1rem + 2rem);
  height: fit-content;
  width: calc(100% - 14rem - 4rem - 1rem);
  background: ${({ theme }) => theme.palette.simple.secondary};
  border-top-left-radius: ${({ theme }) => theme.borderRadius.primary}rem;
  border-top-right-radius: ${({ theme }) => theme.borderRadius.primary}rem;
  transition:
    transform 200ms ease-out,
    box-shadow 200ms ease-out;
  transform: translateY(${({ $isFormVisible }) => ($isFormVisible ? 0 : 'calc(100%)')});
  box-shadow: ${({ theme, $isFormVisible }) =>
    $isFormVisible ? theme.boxShadow.secondary : 'none'};
`

export const ModalHide = styled.div`
  position: fixed;
  z-index: 9999;
  bottom: 0;
  left: 0;
  height: 1rem;
  width: 100%;
  background: ${({ theme }) => theme.palette.background.primary};
`

export const RemindersSearchFormToggleButton = styled.div<IRemindersSearchFormModalProps>`
  position: absolute;
  cursor: pointer;
  top: 0;
  right: 50%;
  transform: translate(50%, -100%);
  padding: 1.2rem;
  background: ${({ theme }) => theme.palette.simple.secondary};
  border-top-left-radius: ${({ theme }) => theme.borderRadius.primary}rem;
  border-top-right-radius: ${({ theme }) => theme.borderRadius.primary}rem;
  box-shadow: ${({ theme }) => theme.boxShadow.secondary};

  & > ${IconOverrideWrapper} {
    transition: transform 300ms ease-out;

    transform: rotate(${({ $isFormVisible }) => ($isFormVisible ? '-90deg' : '90deg')});
  }

  &::after {
    position: absolute;
    left: -10%;
    bottom: -8px;
    height: 8px;
    width: 120%;
    background-color: ${({ theme }) => theme.palette.simple.secondary};
    content: '';
  }
`
