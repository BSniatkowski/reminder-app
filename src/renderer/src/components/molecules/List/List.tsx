import * as S from './List.style'
import { IList } from './List.types'

export const List: React.FC<IList> = ({ direction, wrap, children }) => {
  return (
    <S.ListWrapper $direction={direction} $wrap={wrap}>
      {children}
    </S.ListWrapper>
  )
}
