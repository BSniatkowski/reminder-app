import * as S from './Layout.style'
import { EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
import { TLinks } from '@renderer/components/molecules/Navigation/Navigation.types'
import { EPaths } from '@renderer/router/router.types'
import { Outlet } from 'react-router-dom'
import { Header } from '@renderer/components/organisms/Header/Header'
import { Footer } from '@renderer/components/organisms/Footer/Footer'

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
      <Header links={links} />
      <S.LayoutInsideWrapper>
        <Outlet />
      </S.LayoutInsideWrapper>
      <Footer />
    </S.LayoutWrapper>
  )
}
