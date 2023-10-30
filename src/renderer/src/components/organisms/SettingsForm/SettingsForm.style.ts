import styled from 'styled-components'

export const SettingsFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 3rem;
  gap: 1rem;
`

export const SettingsPartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 35rem;
`

export const SettingsPartTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & > h3 {
    color: ${({ theme }) => theme.palette.simple.primary};
    font-weight: 500;
  }
`

export const SettingsPartDot = styled.div`
  height: 1rem;
  width: 1rem;
  margin: 1rem;
  background-color: ${({ theme }) => theme.palette.simple.primary};
`
