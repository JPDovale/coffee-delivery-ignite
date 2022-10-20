import styled from 'styled-components'

export const SelectedCoffersContainer = styled.section`
  display: flex;
  flex-direction: column;

  width: 39%;

  .head {
    font-family: ${({ theme }) => theme.FontFamilys.header};
    font-size: ${({ theme }) => theme.FontSizes.lg};
    font-weight: bold;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const Selected = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 2.5rem;
  margin-top: 1rem;

  background: ${({ theme }) => theme.Colors.baseCard};
  border-radius: 6px 44px;
  transition: all 500ms;
`

export const FinishPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  .item {
    display: flex;
    justify-content: space-between;

    p {
      font-size: ${({ theme }) => theme.FontSizes.sm};

      color: ${({ theme }) => theme.Colors.baseText};
    }
  }

  .total {
    display: flex;
    justify-content: space-between;

    span {
      font-size: ${({ theme }) => theme.FontSizes.lg};
      font-weight: bold;

      color: ${({ theme }) => theme.Colors.baseSubtitle};
    }
  }

  button {
    padding: 00.75rem;
    margin-top: 0.75rem;

    border: none;
    border-radius: 6px;
    background: ${({ theme }) => theme.Colors.yellow};
    outline: none;
    color: ${({ theme }) => theme.Colors.white};
    transition: all 500ms;

    &:hover {
      background: ${({ theme }) => theme.Colors.yellowDark};
    }
  }
`
