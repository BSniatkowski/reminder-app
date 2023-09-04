import * as S from './Decoration.style'
import { IDecorationProps } from './Decoration.types'

export const Decoration: React.FC<IDecorationProps> = ({ size, color, animate }) => {
  return <S.DecorationDiv $size={size} $color={color} $animate={animate} />
}
