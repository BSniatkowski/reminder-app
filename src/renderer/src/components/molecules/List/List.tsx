import * as S from './List.style'
import { IList } from './List.types'

export const List: React.FC<IList> = ({ as, direction, wrap, children }) => {
  return (
    <S.ListWrapper as={as} $direction={direction} $wrap={wrap}>
      {children}
    </S.ListWrapper>
  )
}
