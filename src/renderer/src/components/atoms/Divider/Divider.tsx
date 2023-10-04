import { Text } from '../Text/Text'
import * as S from './Divider.style'
import { IDividerProps } from './Divider.types'

export const Divider: React.FC<IDividerProps> = ({ text }) => {
  return <S.SDivider>{text && <Text>{text}</Text>}</S.SDivider>
}
