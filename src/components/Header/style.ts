import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;

  top: 0;
  padding: 2rem 10rem;

  background: ${({ theme }) => theme.Colors.background};
  transition: all 500ms;

  @media screen and (max-width: 768px) {
    padding: 2rem 1rem;
  }
`

export const LogoContainer = styled.div``

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;

  background: ${({ theme }) => theme.Colors.purpleLight};
  border-radius: 6px;

  .ico {
    color: ${({ theme }) => theme.Colors.purple};
  }

  span {
    padding-right: 0.25rem;
    font-size: ${({ theme }) => theme.FontSizes.sm};
    color: ${({ theme }) => theme.Colors.purpleDark};
    cursor: default;
  }
`
export const Cart = styled.div`
  position: relative;

  .cart {
    display: flex;

    padding: 0.5rem;

    background: ${({ theme }) => theme.Colors.yellowLight};
    border-radius: 6px;
    color: ${({ theme }) => theme.Colors.yellowDark};
    transition: all 500ms;
  }

  p {
    z-index: 1;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 1.25rem;
    height: 1.25rem;
    top: -0.5rem;
    right: -0.5rem;

    line-height: 0;
    font-weight: bold;
    font-size: ${({ theme }) => theme.FontSizes.xs};

    color: ${({ theme }) => theme.Colors.white};
    border-radius: 100%;
    background-color: ${({ theme }) => theme.Colors.yellowDark};
  }
`

export const ChangeTheme = styled.button`
  display: flex;

  padding: 0.5rem;

  border: none;
  border-radius: 6px;
  background: ${({ theme }) => theme.Colors.baseTitle};
  color: ${({ theme }) => theme.Colors.background};
  cursor: pointer;
  transition: all 500ms;

  &:hover {
    background: ${({ theme }) => theme.Colors.baseHover};
    color: ${({ theme }) => theme.Colors.baseTitle};
  }
`
