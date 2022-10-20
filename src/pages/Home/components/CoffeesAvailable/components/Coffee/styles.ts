import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 22.6%;
  padding: 1.25rem;

  border-radius: 6px 36px;
  background: ${({ theme }) => theme.Colors.baseCard};
  transition: all 500ms;
  box-shadow: 0 0 10px ${({ theme }) => theme.Colors.baseHover};

  img {
    margin-top: -2.25rem;
  }

  @media screen and (max-width: 1350px) {
    width: 46%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  margin-top: 0.75rem;
  width: 100%;

  cursor: default;

  span {
    padding: 0.25rem 0.5rem;

    text-transform: uppercase;
    font-size: ${({ theme }) => theme.FontSizes.xs};
    font-weight: bold;

    background-color: ${({ theme }) => theme.Colors.yellowLight};
    border-radius: 999px;
    color: ${({ theme }) => theme.Colors.yellowDark};
  }
`

export const InfoCoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 00.5rem;

  margin-top: 1rem;

  transition: all 500ms;
  cursor: default;

  p {
    font-family: ${({ theme }) => theme.FontFamilys.header};
    font-size: ${({ theme }) => theme.FontSizes.lg};
    text-align: center;

    transition: all 500ms;
    color: ${({ theme }) => theme.Colors.baseSubtitle};
  }

  span {
    font-size: ${({ theme }) => theme.FontSizes.sm};
    text-align: center;

    transition: all 500ms;
    color: ${({ theme }) => theme.Colors.baseLabel};
  }
`

export const BuyCoffee = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  margin-top: 2rem;
`
export const CoffeePrice = styled.div`
  display: flex;
  gap: 0.125rem;
  align-items: center;

  color: ${({ theme }) => theme.Colors.baseText};
  transition: all 500ms;
  cursor: default;

  span {
    font-size: ${({ theme }) => theme.FontSizes.xs};
    transition: all 500ms;
  }

  p {
    font-family: ${({ theme }) => theme.FontFamilys.header};
    font-weight: bold;
    font-size: ${({ theme }) => theme.FontSizes['2xl']};
    transition: all 500ms;
  }
`
export const CountCartCoffee = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.25rem;

    padding: 0.5rem;
    width: 4.5rem;
    height: 2.375rem;

    border-radius: 6px;
    background: ${({ theme }) => theme.Colors.baseButton};
    transition: all 500ms;

    button {
      line-height: 0;

      border: none;
      background: transparent;
      color: ${({ theme }) => theme.Colors.purple};
      cursor: pointer;
      transition: all 500ms;

      &:hover {
        color: ${({ theme }) => theme.Colors.purpleDark};
      }
    }

    span {
      font-size: ${({ theme }) => theme.FontSizes.md};

      transition: all 500ms;
      color: ${({ theme }) => theme.Colors.baseTitle};
      cursor: default;
      transition: all 500ms;
    }
  }

  .icoCart {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.5rem;
    width: 2.375rem;
    height: 2.375rem;

    line-height: 0;

    border-radius: 6px;
    background: ${({ theme }) => theme.Colors.purpleDark};
    color: white;
    transition: all 500ms;

    &:hover {
      background: ${({ theme }) => theme.Colors.purple};
    }
  }
`
