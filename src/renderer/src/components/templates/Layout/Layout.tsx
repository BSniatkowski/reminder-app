import * as S from './Layout.style'
import { EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
import { TLinks } from '@renderer/components/molecules/Navigation/Navigation.types'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Header } from '@renderer/components/organisms/Header/Header'
import { Footer } from '@renderer/components/organisms/Footer/Footer'
import { useCallback, useMemo } from 'react'
import { Button } from '@renderer/components/atoms/Button/Button'

const links: TLinks = [
  { path: '/', name: 'home', text: 'Home', iconVariant: EIconVariants.HOME }
  // {
  //   path: '/',
  //   name: 'planner',
  //   text: 'Planner',
  //   iconVariant: EIconVariants.CALENDAR
  // },
  // {
  //   path: '/',
  //   name: 'stats',
  //   text: 'Stats',
  //   iconVariant: EIconVariants.STATS
  // },
  // {
  //   path: '/',
  //   name: 'settings',
  //   text: 'Settings',
  //   iconVariant: EIconVariants.SETTINGS
  // },
  // {
  //   path: '/',
  //   name: 'about',
  //   text: 'About app',
  //   iconVariant: EIconVariants.INFO
  // }
]

export const Layout: React.FC = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const onGoBackClick = useCallback(() => {
    navigate(-1)
  }, [navigate])

  const isNotOneOfBasePaths = useMemo(() => !['/'].includes(pathname), [pathname])

  return (
    <S.LayoutWrapper>
      <Header links={links} />
      <S.LayoutInsideWrapper>
        {isNotOneOfBasePaths && <Button text="Go Back" onClick={onGoBackClick} />}
        <Outlet />
      </S.LayoutInsideWrapper>
      <Footer />
    </S.LayoutWrapper>
  )
}
