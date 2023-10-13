export interface IDateWidgetWrapperProps {
  $isVisible?: boolean
}

export interface IDateWidgetProps {
  name: string
  date: string
  isVisible?: boolean
  onMouseLeave: () => void
}
