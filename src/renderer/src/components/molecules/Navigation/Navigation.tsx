import { INavigationProps } from './Navigation.types'
import { List } from '@renderer/components/molecules/List/List'
import { EListDirections } from '@renderer/components/molecules/List/List.types'
import { Button } from '@renderer/components/atoms/Button/Button'
import { useLocation, useNavigate } from 'react-router-dom'

export const Navigation: React.FC<INavigationProps> = ({ links }) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <List as="nav" direction={EListDirections.column}>
      {links.map(({ path, name, iconVariant }) => (
        <Button
          key={name}
          iconVariant={iconVariant}
          disabled={pathname === path}
          onClick={() => navigate(path)}
        />
      ))}
    </List>
  )
}
