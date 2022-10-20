import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin: auto;
  margin-top: 0.5rem;
  max-width: 90rem;

  border-radius: 8px;
  transition: all 500ms;

  @media screen and (min-width: 1468px) {
    box-shadow: 0 0 10px ${({ theme }) => theme.Colors.baseInput};
  }
`
