import { useTheme } from 'styled-components'
import { ETextTags, ITextProps } from './Text.types'
import { CSSProperties } from 'react'

export const Text: React.FC<ITextProps> = ({ as = ETextTags.span, nowrap, children }) => {
  const Component = as === ETextTags.a ? ETextTags.span : as
  const {
    spacing: { small }
  } = useTheme()

  const basicStyles = {
    minWidth: '1%',
    width: 'inherit',
    overflowWrap: 'break-word',
    textWrap: nowrap ? 'nowrap' : 'wrap'
  } as CSSProperties

  const style =
    as === ETextTags.a
      ? basicStyles
      : {
          ...basicStyles,
          padding: `${small / 2}rem`
        }

  return <Component style={style}>{children}</Component>
}
