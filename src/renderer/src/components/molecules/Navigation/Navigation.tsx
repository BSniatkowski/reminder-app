import { INavigationProps } from './Navigation.types'
import * as S from './Navigation.style'
import { List } from '@renderer/components/molecules/List/List'
import { EListDirections } from '@renderer/components/molecules/List/List.types'
import { Button } from '@renderer/components/atoms/Button/Button'
import { Tile } from '@renderer/components/atoms/Tile/Tile'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { ETileContentDirections, ETileSizes } from '@renderer/components/atoms/Tile/Tile.types'
import { Icon } from '@renderer/components/atoms/Icon/Icon'
import { EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
import { Text } from '@renderer/components/atoms/Text/Text'

export const Navigation: React.FC<INavigationProps> = ({ links }) => {
  const {
    palette: {
      background: { primary, secondary }
    }
  } = useTheme()

  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <S.NavigationWrapper>
      <Tile
        size={ETileSizes.full}
        justifyContent="flex-start"
        contentDirection={ETileContentDirections.row}
        nowrap
      >
        <Icon size="2.4rem" variant={EIconVariants.CALENDAR} color={primary} />
        <Text>Reminder App</Text>
        <List direction={EListDirections.row}>
          {links.map(({ path, name, text, iconVariant }) => (
            <Button
              key={name}
              text={text}
              iconVariant={iconVariant}
              iconColor={secondary}
              iconActiveColor={primary}
              disabled={pathname === path}
              onClick={() => navigate(path)}
            />
          ))}
        </List>
      </Tile>
    </S.NavigationWrapper>
  )
}
