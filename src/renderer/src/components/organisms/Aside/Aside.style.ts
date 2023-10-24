import { IconOverrideWrapper } from '@renderer/components/atoms/Icon/Icon.style'
import { styled } from 'styled-components'

export const AsideWrapper = styled.aside`
  display: inline-block;
  height: 100%;
  width: 14rem;
  padding: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.primary}rem;
  background-color: ${({ theme }) => theme.palette.background.secondary};

  & > ${IconOverrideWrapper} {
    margin: 1rem auto 1rem auto;

    & > svg > path {
      fill: ${({ theme }) => theme.palette.simple.primary};
    }
  }
`
