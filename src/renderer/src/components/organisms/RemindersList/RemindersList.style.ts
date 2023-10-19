import { ButtonWrapper } from '@renderer/components/atoms/Button/Button.style'
import styled from 'styled-components'

export const RemindersListWrapper = styled.div`
  display: grid;
  width: 100%;
  padding: 1rem;
  gap: 1rem;

  grid-template-columns: repeat(1, auto);

  @media screen and (min-width: 1060px) {
    grid-template-columns: repeat(2, auto);
  }

  @media screen and (min-width: 1600px) {
    grid-template-columns: repeat(3, auto);
  }

  @media screen and (min-width: 1920px) {
    grid-template-columns: repeat(4, auto);
  }

  & > ${ButtonWrapper} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
