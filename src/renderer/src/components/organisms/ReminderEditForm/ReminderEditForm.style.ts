import styled, { keyframes } from 'styled-components'
import { IReminderEditFormModalProps } from './ReminderEditForm.types'
import { ButtonWrapper } from '@renderer/components/atoms/Button/Button.style'

const fadeIn = keyframes`
0% {
    opacity: 0;
}
100% {
    opacity: 1;
}`

export const ReminderEditFormModal = styled.div<IReminderEditFormModalProps>`
  position: fixed;
  z-index: 9998;
  top: 4rem;
  right: ${({ $isFormVisible }) => ($isFormVisible ? '1rem' : '-100%')};
  height: calc(100% - 2rem - 3rem);
  width: 43.5rem;
  background: ${({ theme }) => theme.palette.simple.secondary};
  transition: right 200ms ease-out;
  border-top-left-radius: ${({ theme }) => theme.borderRadius.primary}rem;
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius.primary}rem;

  & > ${ButtonWrapper} {
    margin-left: auto;
    padding: 1rem;
  }
`
export const ModalHide = styled.div`
  position: fixed;
  z-index: 9999;
  right: 0;
  bottom: 1rem;
  height: calc(100% - 2rem - 3rem);
  width: 1rem;
  background: ${({ theme }) => theme.palette.background.primary};
`

export const ReminderEditFormModalOverlay = styled.div`
  position: fixed;
  z-index: 9997;
  top: 4rem;
  height: calc(100% - 2rem - 3rem);
  width: calc(100% - 14rem - 4rem);
  opacity: 1;
  background: ${({ theme }) => theme.palette.gradients.overlay};
  animation: 200ms ${fadeIn} ease-out;
`
