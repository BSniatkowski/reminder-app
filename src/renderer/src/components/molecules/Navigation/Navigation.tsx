import { INavigationProps } from './Navigation.types'
import { List } from '@renderer/components/molecules/List/List'
import { EListDirections } from '@renderer/components/molecules/List/List.types'
import { Button } from '@renderer/components/atoms/Button/Button'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTheme } from 'styled-components'

export const Navigation: React.FC<INavigationProps> = ({ links }) => {
  const {
    palette: { primary, secondary }
  } = useTheme()

  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <List as="nav" direction={EListDirections.row}>
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
  )
}
