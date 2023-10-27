import { useRef } from 'react'

export interface IFixedWrapperProps {
  ref: ReturnType<typeof useRef>
  $isVisible: boolean
  $top: number
  $left: number
}
