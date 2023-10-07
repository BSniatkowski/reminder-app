import { SDivider } from '@renderer/components/atoms/Divider/Divider.style'
import styled from 'styled-components'
import { IAccordionTitleWrapperProps } from './Accordion.types'
import { IconOverrideWrapper } from '@renderer/components/atoms/Icon/Icon.style'

export const AccordionTitleWrapper = styled.div<IAccordionTitleWrapperProps>`
  position: relative;
  cursor: pointer;
  user-select: none;

  & > ${SDivider} {
    width: calc(100% - 1.6rem);
  }

  & > ${IconOverrideWrapper} {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%) rotate(${({ $isCollapsed }) => ($isCollapsed ? '-90deg' : '90deg')});
    transition: transform 100ms;
  }
`
