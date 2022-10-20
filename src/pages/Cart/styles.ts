import styled from 'styled-components'

export const CartContainer = styled.main`
  display: flex;
  gap: 2rem;

  width: 100%;
  margin: auto;
  margin-top: 0.5rem;
  max-width: 90rem;
  padding: 2.5rem 10rem;

  border-radius: 8px;
  transition: all 500ms;

  @media screen and (min-width: 1468px) {
    box-shadow: 0 0 10px ${({ theme }) => theme.Colors.baseInput};
  }

  .finishForms {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    width: 60%;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;

    padding: 0.5rem 1rem;

    .finishForms {
      width: 100%;
    }
  }
`
