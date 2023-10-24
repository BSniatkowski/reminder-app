import { Icon } from '@renderer/components/atoms/Icon/Icon'
import { EIconSizes, EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
import { Navigation } from '@renderer/components/molecules/Navigation/Navigation'
import { TLinks } from '@renderer/components/molecules/Navigation/Navigation.types'

import * as S from './Aside.style'

export interface IAsideProps {
  links: TLinks
}

export const Aside: React.FC<IAsideProps> = ({ links }) => {
  return (
    <S.AsideWrapper>
      <Icon size={EIconSizes.big} variant={EIconVariants.CALENDAR} />
      <Navigation links={links} />
    </S.AsideWrapper>
  )
}
