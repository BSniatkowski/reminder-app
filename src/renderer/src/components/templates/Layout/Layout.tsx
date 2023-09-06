import * as S from './Layout.style'
import { Navigation } from '@renderer/components/molecules/Navigation/Navigation'
import { EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
import { TLinks } from '@renderer/components/molecules/Navigation/Navigation.types'
import { EPaths } from '@renderer/router/router.types'
import { Outlet } from 'react-router-dom'

const links: TLinks = [
  { path: '/', name: 'home', text: 'Home', iconVariant: EIconVariants.HOME },
  {
    path: EPaths.PLANNER,
    name: 'planner',
    text: 'Planner',
    iconVariant: EIconVariants.CALENDAR
  },
  {
    path: EPaths.STATS,
    name: 'stats',
    text: 'Stats',
    iconVariant: EIconVariants.STATS
  },
  {
    path: EPaths.SETTINGS,
    name: 'settings',
    text: 'Settings',
    iconVariant: EIconVariants.SETTINGS
  },
  {
    path: EPaths.ABOUT,
    name: 'about',
    text: 'About app',
    iconVariant: EIconVariants.INFO
  }
]

export const Layout: React.FC = () => {
  return (
    <S.LayoutWrapper>
      <Navigation links={links} />
      <Outlet />
    </S.LayoutWrapper>
  )
}
