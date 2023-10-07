import { Text } from '../Text/Text'
import * as S from './Tooltip.style'
import { ITooltipProps } from './Tooltip.types'

export const Tooltip: React.FC<ITooltipProps> = ({
  text,
  isVisible,
  positionX,
  positionY,
  arrowDirection
}) => {
  return (
    <S.TooltipWrapper $isVisible={isVisible} $positionX={positionX} $positionY={positionY}>
      <Text>{text}</Text>
      <S.TooltipArrow $arrowDirection={arrowDirection} />
    </S.TooltipWrapper>
  )
}
