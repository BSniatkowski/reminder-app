import styled from 'styled-components'

export const EncourageWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  min-width: 46rem;
  width: 50%;
`

export const EncourageTop = styled.div`
  display: flex;
  align-items: center;

  & > * {
    color: ${({ theme }) => theme.palette.simple.secondary};

    svg > path {
      fill: ${({ theme }) => theme.palette.simple.secondary};
    }
  }
`
