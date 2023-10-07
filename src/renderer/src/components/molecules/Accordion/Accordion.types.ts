export interface IAccordionProps {
  title: string
  disabled?: boolean
  children: React.ReactNode
  initialOpen?: boolean
  isCollapsed?: boolean
  onClick?: () => void
}

export interface IAccordionTitleWrapperProps {
  $isCollapsed: boolean
}
