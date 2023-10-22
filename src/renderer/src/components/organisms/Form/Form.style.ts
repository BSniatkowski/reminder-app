import { styled } from 'styled-components'

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2rem;
  width: 100%;
  height: 100%;
`

export const FormInsideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
  height: calc(100% - 10rem);
  width: 100%;
`

export const ActionButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 2rem 0;
  gap: 1rem;
`
