import { ETextTags, ITextProps } from './Text.types'

export const Text: React.FC<ITextProps> = ({ as = ETextTags.span, children }) => {
  const Component = as || ETextTags.span

  return <Component>{children}</Component>
}
