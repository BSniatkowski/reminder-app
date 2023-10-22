import * as S from './TitleBar.style'
import { EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
import { useState } from 'react'
import { Icon } from '@renderer/components/atoms/Icon/Icon'
import { Text } from '@renderer/components/atoms/Text/Text'

export const TitleBar = () => {
  const [isFullscreen, setIsFullscreen] = useState(false)

  return (
    <S.TitleBarWrapper>
      <S.BarIconAndTitle>
        <Icon variant={EIconVariants.CALENDAR} size="1.4rem" />
        <Text>Don&apos;t You Mind? - Reminder App</Text>
      </S.BarIconAndTitle>
      <S.ButtonsContainer>
        <S.BarButton>
          <Icon variant={EIconVariants.MINIMIZE} size="1.4rem" />
        </S.BarButton>
        <S.BarButton onClick={() => setIsFullscreen(!isFullscreen)}>
          <Icon
            variant={isFullscreen ? EIconVariants.RESIZE_SMALL : EIconVariants.RESIZE_FULL}
            size="1.4rem"
          />
        </S.BarButton>
        <S.BarButton onClick={() => window.api.closeWindow()}>
          <Icon variant={EIconVariants.CLOSE} size="1.4rem" />
        </S.BarButton>
      </S.ButtonsContainer>
    </S.TitleBarWrapper>
  )
}
