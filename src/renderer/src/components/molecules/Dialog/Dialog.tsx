import * as S from './Dialog.style'
import { Text } from '@renderer/components/atoms/Text/Text'
import { Button } from '@renderer/components/atoms/Button/Button'
import { EButtonVariants } from '@renderer/components/atoms/Button/Button.types'
import { IDialogProps } from './Dialog.types'
import { ETextTags } from '@renderer/components/atoms/Text/Text.types'

export const Dialog: React.FC<IDialogProps> = ({
  isVisible,
  mainText,
  cancelText,
  acceptText,
  onCancel,
  onAccept
}) => {
  return (
    <S.DialogWrapper $isVisible={isVisible}>
      <S.DialogOverlay />
      {isVisible && <S.BodyOverflowHidden />}
      <Text as={ETextTags.h4}>{mainText}</Text>
      <Button onClick={onCancel} variant={EButtonVariants.light} text={cancelText} />
      <Button onClick={onAccept} variant={EButtonVariants.remove} text={acceptText} />
    </S.DialogWrapper>
  )
}
