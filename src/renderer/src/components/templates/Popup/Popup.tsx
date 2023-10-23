import * as S from './Popup.styles'
import { TPopupProps } from './Popup.types'
import { Text } from '@renderer/components/atoms/Text/Text'
import { findAndReplaceLinks } from '@renderer/utils/findAndReplaceLinks'
import { Button } from '@renderer/components/atoms/Button/Button'
import { EIconSizes, EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
import { EButtonSizes, EButtonVariants } from '@renderer/components/atoms/Button/Button.types'
import { Link } from '@renderer/components/atoms/Link/Link'
import { YTPlayer } from '@renderer/components/organisms/YTPlayer/YTPlayer'
import { Icon } from '@renderer/components/atoms/Icon/Icon'
import { ETextTags } from '@renderer/components/atoms/Text/Text.types'
import { textPreview } from '@renderer/utils/textPreview'
import { useMemo } from 'react'

export const Popup: React.FC<TPopupProps> = ({
  title,
  description,
  link,
  videoId,
  autoPlay,
  onDone,
  onPostpone,
  onRemove
}) => {
  const descriptionNodes = findAndReplaceLinks({ text: description })

  const isSmall = useMemo(() => !description && !link, [description, link])

  return (
    <S.PopupWrapper $withVideo={!!videoId} $isSmall={isSmall}>
      {videoId && <YTPlayer videoId={videoId} autoPlay={autoPlay} />}
      <S.TitleWithIcon>
        <Icon variant={EIconVariants.NOTIFICATION} size={EIconSizes.normal} />
        <Text as={ETextTags.h4}>{title}</Text>
      </S.TitleWithIcon>
      {link && <Link text={textPreview({ text: link, maxLength: 70 })} linkRef={link} />}
      {descriptionNodes}
      <S.ButtonsContainer $isSmall={isSmall}>
        <Button
          size={isSmall ? EButtonSizes.small : EButtonSizes.big}
          variant={EButtonVariants.remove}
          iconVariant={EIconVariants.DELETE}
          onClick={onRemove}
        />
        <Button
          size={isSmall ? EButtonSizes.small : EButtonSizes.big}
          iconVariant={EIconVariants.POSTPONE}
          onClick={onPostpone}
        />
        <Button
          size={isSmall ? EButtonSizes.small : EButtonSizes.big}
          iconVariant={EIconVariants.DONE}
          onClick={onDone}
        />
      </S.ButtonsContainer>
    </S.PopupWrapper>
  )
}
