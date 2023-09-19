import { useTheme } from 'styled-components'
import { ETextTags, ITextProps } from './Text.types'

export const Text: React.FC<ITextProps> = ({ as = ETextTags.span, children }) => {
  const Component = as === ETextTags.a ? ETextTags.span : as
  const {
    spacing: { small }
  } = useTheme()

  const style = as === ETextTags.a ? {} : { padding: `${small / 2}rem` }

  return <Component style={style}>{children}</Component>
}
