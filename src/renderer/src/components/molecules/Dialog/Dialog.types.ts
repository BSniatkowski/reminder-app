export interface IDialogProps {
  isVisible: boolean
  mainText: string
  cancelText: string
  acceptText: string
  onCancel: () => void
  onAccept: () => void
}

export interface IDialogWrapperProps {
  $isVisible: boolean
}
