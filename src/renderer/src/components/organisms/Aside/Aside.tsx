import { Icon } from '@renderer/components/atoms/Icon/Icon'
import { EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
import { Navigation } from '@renderer/components/molecules/Navigation/Navigation'
import { TLinks } from '@renderer/components/molecules/Navigation/Navigation.types'

import * as S from './Aside.style'

export interface IAsideProps {
  links: TLinks
}

export const Aside: React.FC<IAsideProps> = ({ links }) => {
  return (
    <S.AsideWrapper>
      <Icon size="2.4rem" variant={EIconVariants.CALENDAR} />
      <Navigation links={links} />
    </S.AsideWrapper>
  )
}
