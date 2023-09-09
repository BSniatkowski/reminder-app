import { useTheme } from 'styled-components'

import { Icon } from '@renderer/components/atoms/Icon/Icon'
import { EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
import { Text } from '@renderer/components/atoms/Text/Text'
import { Tile } from '@renderer/components/atoms/Tile/Tile'
import { ETileSizes, ETileContentDirections } from '@renderer/components/atoms/Tile/Tile.types'
import { Navigation } from '@renderer/components/molecules/Navigation/Navigation'
import { TLinks } from '@renderer/components/molecules/Navigation/Navigation.types'

import * as S from './Header.style'

export interface IHeaderProps {
  links: TLinks
}

export const Header: React.FC<IHeaderProps> = ({ links }) => {
  const {
    palette: { primary }
  } = useTheme()

  return (
    <S.HeaderWrapper>
      <Tile
        size={ETileSizes.full}
        justifyContent="flex-start"
        contentDirection={ETileContentDirections.row}
        nowrap
      >
        <Icon size="2.4rem" variant={EIconVariants.CALENDAR} color={primary} />
        <Text>Reminder App</Text>
        <Navigation links={links} />
      </Tile>
    </S.HeaderWrapper>
  )
}
