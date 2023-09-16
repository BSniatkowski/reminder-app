import * as S from './Clock.style'
import * as SharedS from '../Shared.style'
import { IDateWidgetProps } from '../Shared.types'

export const Clock = ({ name, date, isVisible }: IDateWidgetProps) => {
  return <SharedS.DateWidgetWrapper $isVisible={isVisible}></SharedS.DateWidgetWrapper>
}
