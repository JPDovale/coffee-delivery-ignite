import styled from 'styled-components'

export const CoffeeInCartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 1.5rem;

  border-bottom: 1px solid ${({ theme }) => theme.Colors.baseButton};

  img {
    width: 4rem;
    margin-right: 1.25rem;
  }
`

export const Count = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .title {
    font-size: ${({ theme }) => theme.FontSizes.md};
  }

  .buttons {
    display: flex;
    gap: 0.5rem;

    .dell {
      display: flex;
      align-items: center;
      gap: 0.25rem;

      padding: 0.5rem;

      line-height: 0;

      border: none;
      border-radius: 6px;
      background: ${({ theme }) => theme.Colors.baseButton};
      color: ${({ theme }) => theme.Colors.purple};
      cursor: pointer;
      transition: all 500ms;

      &:hover {
        color: ${({ theme }) => theme.Colors.purpleDark};
      }

      span {
        text-transform: uppercase;
        font-size: ${({ theme }) => theme.FontSizes.sm};
      }
    }
  }
`

export const Buttons = styled.div`
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
    font-size: ${({ theme }) => theme.FontSizes.md};
    transition: all 500ms;
  }
`
