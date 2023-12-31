import * as S from './Link.style'
import { ILinkProps } from './Link.types'

export const Link: React.FC<ILinkProps> = ({ text, linkRef }) => {
  return (
    <S.LinkWrapper href={linkRef} target="_blank">
      {text || linkRef}
    </S.LinkWrapper>
  )
}
