import * as S from './Label.style'
import { ILabelProps } from './Label.types'

export const Label: React.FC<ILabelProps> = ({ label, asPlaceholder }) => {
  return <S.SLabel $asPlaceholder={asPlaceholder}>{label}</S.SLabel>
}
