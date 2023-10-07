import { Text } from '../Text/Text'
import * as S from './Divider.style'
import { IDividerProps } from './Divider.types'

export const Divider: React.FC<IDividerProps> = ({ title }) => {
  return <S.SDivider>{title && <Text>{title}</Text>}</S.SDivider>
}
