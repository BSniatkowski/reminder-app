import { Tile } from '@renderer/components/atoms/Tile/Tile'
import * as S from './Popup.styles'
import { TPopupProps } from './Popup.types'
import { Text } from '@renderer/components/atoms/Text/Text'
import { findAndReplaceLinks } from '@renderer/utils/findAndReplaceLinks'
import { Button } from '@renderer/components/atoms/Button/Button'
import { EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
import { useTheme } from 'styled-components'
import { EButtonVariants } from '@renderer/components/atoms/Button/Button.types'
import { ETileContentDirections, ETileSizes } from '@renderer/components/atoms/Tile/Tile.types'

export const Popup: React.FC<TPopupProps> = ({ title, description, onPostpone, onClose }) => {
  const {
    palette: { primary, secondary }
  } = useTheme()

  const descriptionNodes = findAndReplaceLinks({ text: description })

  return (
    <S.PopupWrapper $contentDirection={ETileContentDirections.column} $alignItems="flex-end">
      <Tile size={ETileSizes.full}>
        <Text>{title}</Text>
        {descriptionNodes}
      </Tile>
      <Tile transparent nowrap>
        <Button
          variant={EButtonVariants.light}
          iconColor={primary}
          iconActiveColor={secondary}
          iconVariant={EIconVariants.POSTPONE}
          text="Remind me 15 minutes later..."
          onClick={onPostpone}
        />
        <Button
          variant={EButtonVariants.light}
          iconColor={primary}
          iconActiveColor={secondary}
          iconVariant={EIconVariants.DELETE}
          onClick={onClose}
        />
      </Tile>
    </S.PopupWrapper>
  )
}
