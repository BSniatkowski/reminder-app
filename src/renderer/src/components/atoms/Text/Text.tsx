import { ETextTags, ITextProps } from './Text.types'
import { CSSProperties } from 'react'

export const Text: React.FC<ITextProps> = ({ as = ETextTags.span, nowrap, children }) => {
  const Component = as || ETextTags.span

  const basicStyles = {
    minWidth: '1%',
    width: 'inherit',
    overflowWrap: 'break-word',
    textWrap: nowrap ? 'nowrap' : 'wrap',
    textDecoration: 'none'
  } as CSSProperties

  return <Component style={basicStyles}>{children}</Component>
}
