import styled from 'styled-components'

export const PaymentContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;

  background: ${({ theme }) => theme.Colors.baseCard};
  border-radius: 6px;
  transition: all 500ms;
`
export const InfosContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  color: ${({ theme }) => theme.Colors.purpleDark};

  .info {
    p {
      font-size: ${({ theme }) => theme.FontSizes.md};

      color: ${({ theme }) => theme.Colors.baseSubtitle};
    }

    span {
      font-size: ${({ theme }) => theme.FontSizes.sm};

      color: ${({ theme }) => theme.Colors.baseSubtitle};
    }
  }
`

export const PaymentMethods = styled.div`
  display: flex;
  gap: 0.75rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

interface MethodProps {
  selected: boolean
}

export const Method = styled.button<MethodProps>`
  display: flex;
  gap: 0.75rem;

  padding: 1rem;
  width: 100%;

  border: 1px solid
    ${(props) =>
      props.selected
        ? `${props.theme.Colors.purpleDark}`
        : `${props.theme.Colors.baseButton}`};
  border-radius: 6px;
  color: ${({ theme }) => theme.Colors.purpleDark};
  background: ${({ theme }) => theme.Colors.baseButton};
  transition: all 500ms;
  outline: none;
  cursor: pointer;

  span {
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.FontSizes.xs};
    line-height: ${({ theme }) => theme.LineHeight.lg};

    color: ${({ theme }) => theme.Colors.baseText};
    transition: all 500ms;
  }

  &:hover {
    background: ${({ theme }) => theme.Colors.baseHover};
  }

  &:active {
    border: 1px solid ${({ theme }) => theme.Colors.purpleDark};
    background: ${({ theme }) => theme.Colors.purpleLight};

    span {
      color: ${({ theme }) => theme.Colors.baseCard};
    }
  }
`
