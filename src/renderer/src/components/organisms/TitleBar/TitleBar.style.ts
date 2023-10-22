import styled from 'styled-components'

export const TitleBarWrapper = styled.header`
  -webkit-app-region: drag;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.simple.secondary};
`

export const BarIconAndTitle = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 3rem;
  padding-left: 0.8rem;
  width: fit-content;
  font-weight: 600;
`
export const ButtonsContainer = styled.header`
  -webkit-app-region: no-drag;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 3rem;
  width: fit-content;
`

export const BarButton = styled.div`
  padding: 0.8rem;
  transition: background-color 100ms ease-out;

  &:hover {
    background-color: ${({ theme }) => theme.palette.simple.hover};
  }

  &:nth-child(3) {
    &:hover {
      background-color: ${({ theme }) => theme.palette.simple.delete};
    }
  }
`
