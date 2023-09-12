import { Text } from '@atoms/Text/Text'
import * as S from './Link.style'
import { ILinkProps } from './Link.types'
import { ETextTags } from '../Text/Text.types'

export const Link: React.FC<ILinkProps> = ({ text, linkRef }) => {
  return (
    <S.LinkWrapper href={linkRef} target="_blank">
      <Text as={ETextTags.a}>{text}</Text>
    </S.LinkWrapper>
  )
}
