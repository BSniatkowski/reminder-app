import * as S from './Layout.style'
import { EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
import { TLinks } from '@renderer/components/molecules/Navigation/Navigation.types'
import { Outlet } from 'react-router-dom'
import { Aside } from '@renderer/components/organisms/Aside/Aside'
import { TitleBar } from '@renderer/components/organisms/TitleBar/TitleBar'

const links: TLinks = [
  { path: '/', name: 'home', text: 'Home', iconVariant: EIconVariants.HOME },
  {
    path: '/settings',
    name: 'settings',
    text: 'Settings',
    iconVariant: EIconVariants.SETTINGS
  },
  {
    path: '/about',
    name: 'about',
    text: 'About app',
    iconVariant: EIconVariants.INFO
  }
]

export const Layout: React.FC = () => {
  return (
    <S.LayoutWrapper>
      <TitleBar />
      <S.LayoutInsideWrapper>
        <Aside links={links} />
        <S.ContentWrapper>
          <Outlet />
        </S.ContentWrapper>
      </S.LayoutInsideWrapper>
    </S.LayoutWrapper>
  )
}
