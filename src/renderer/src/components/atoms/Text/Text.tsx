import { ETextTags, IText } from './Text.types'

export const Text: React.FC<IText> = ({ as = ETextTags.span, children }) => {
  const Component = as || ETextTags.span

  return <Component>{children}</Component>
}
