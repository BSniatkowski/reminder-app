import { Link } from '@renderer/components/atoms/Link/Link'
import { Tile } from '@renderer/components/atoms/Tile/Tile'
import { List } from '@renderer/components/molecules/List/List'

import * as S from './Footer.style'
import { EListDirections } from '@renderer/components/molecules/List/List.types'
import { ETileSizes } from '@renderer/components/atoms/Tile/Tile.types'
import { Icon } from '@renderer/components/atoms/Icon/Icon'
import { EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
import { useTheme } from 'styled-components'

export const Footer: React.FC = () => {
  const {
    palette: { white }
  } = useTheme()

  return (
    <S.FooterWrapper>
      <Tile transparent size={ETileSizes.full}>
        <List direction={EListDirections.column}>
          <Tile transparent size={ETileSizes.small}>
            <Icon variant={EIconVariants.CODE} size="2.4rem" color={white} />
            <Link
              linkRef="https://electron-vite.org/"
              text="Used template from https://electron-vite.org/"
            />
          </Tile>
        </List>
        <List direction={EListDirections.column}>
          <Tile transparent size={ETileSizes.small}>
            <Icon variant={EIconVariants.GITHUB} size="2.4rem" color={white} />
            <Link linkRef="https://github.com/BSniatkowski" text="Github profile - BSniatkowski" />
          </Tile>
        </List>
      </Tile>
    </S.FooterWrapper>
  )
}
