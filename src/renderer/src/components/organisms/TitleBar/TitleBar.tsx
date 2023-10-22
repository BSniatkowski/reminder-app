import * as S from './TitleBar.style'
import { EIconSizes, EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
import { useState } from 'react'
import { Icon } from '@renderer/components/atoms/Icon/Icon'
import { Text } from '@renderer/components/atoms/Text/Text'

export const TitleBar = () => {
  const [isFullscreen, setIsFullscreen] = useState(false)

  return (
    <S.TitleBarWrapper>
      <S.BarIconAndTitle>
        <Icon variant={EIconVariants.CALENDAR} size={EIconSizes.xsmall} />
        <Text>Don&apos;t You Mind? - Reminder App</Text>
      </S.BarIconAndTitle>
      <S.ButtonsContainer>
        <S.BarButton>
          <Icon variant={EIconVariants.MINIMIZE} size={EIconSizes.xsmall} />
        </S.BarButton>
        <S.BarButton onClick={() => setIsFullscreen(!isFullscreen)}>
          <Icon
            variant={isFullscreen ? EIconVariants.RESIZE_SMALL : EIconVariants.RESIZE_FULL}
            size={EIconSizes.xsmall}
          />
        </S.BarButton>
        <S.BarButton onClick={() => window.api.closeWindow()}>
          <Icon variant={EIconVariants.CLOSE} size={EIconSizes.xsmall} />
        </S.BarButton>
      </S.ButtonsContainer>
    </S.TitleBarWrapper>
  )
}
