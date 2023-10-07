import { Divider } from '@renderer/components/atoms/Divider/Divider'
import * as S from './Accordion.style'
import { IAccordionProps } from './Accordion.types'
import { Icon } from '@renderer/components/atoms/Icon/Icon'
import { EIconVariants } from '@renderer/components/atoms/Icon/Icon.types'
import { useCallback, useState } from 'react'

export const Accordion: React.FC<IAccordionProps> = ({
  title,
  initialOpen,
  isCollapsed,
  onClick,
  children
}) => {
  const [selfIsCollapsed, setSelfIsCollapsed] = useState(initialOpen ?? false)

  const onAccordionTitleClick = useCallback(
    () => (onClick ? onClick() : setSelfIsCollapsed(!selfIsCollapsed)),
    [onClick, selfIsCollapsed]
  )

  return (
    <>
      <S.AccordionTitleWrapper
        $isCollapsed={isCollapsed ?? selfIsCollapsed}
        onClick={onAccordionTitleClick}
      >
        <Divider title={title} />
        <Icon size="1.6rem" variant={EIconVariants.ARR_LEFT} />
      </S.AccordionTitleWrapper>
      {isCollapsed ?? (selfIsCollapsed && children)}
    </>
  )
}
