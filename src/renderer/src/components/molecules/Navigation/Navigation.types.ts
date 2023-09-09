import { EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'

export interface ILink {
  path: string
  name: string
  text: string
  iconVariant: EIconVariants
}

export type TLinks = Array<ILink>

export interface INavigationProps {
  links: TLinks
}
