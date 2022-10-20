import styled from 'styled-components'

export const AddressFormContainer = styled.section`
  display: flex;
  flex-direction: column;

  .head {
    font-family: ${({ theme }) => theme.FontFamilys.header};
    font-size: ${({ theme }) => theme.FontSizes.lg};
    font-weight: bold;
  }
`

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2.5rem;
  margin-top: 1rem;

  background: ${({ theme }) => theme.Colors.baseCard};
  border-radius: 6px;
  transition: all 500ms;

  .infos {
    display: flex;
    gap: 0.5rem;

    color: ${({ theme }) => theme.Colors.yellowDark};

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
  }
`

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 2rem;

  .house {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span {
      position: absolute;
      right: 0.85rem;

      font-style: italic;
      font-size: ${({ theme }) => theme.FontSizes.sm};

      color: ${({ theme }) => theme.Colors.baseLabel};
    }
  }
  .city {
    display: flex;
    gap: 00.75rem;
  }
`

export const BaseInput = styled.input`
  padding: 0.75rem;

  font-size: ${({ theme }) => theme.FontSizes.sm};

  border: 1px solid ${({ theme }) => theme.Colors.baseInput};
  border-radius: 4px;
  background: ${({ theme }) => theme.Colors.baseButton};
  outline: none;
  transition: all 500ms;
  color: ${({ theme }) => theme.Colors.baseTitle};

  &:focus {
    border: 1px solid ${({ theme }) => theme.Colors.yellowDark};
  }

  &::placeholder {
    color: ${({ theme }) => theme.Colors.baseLabel};
  }
`

export const MdInput = styled(BaseInput)`
  min-width: 33%;
  max-width: 33%;
`

export const LgInput = styled(BaseInput)`
  width: 100%;
`

export const SmInput = styled(BaseInput)`
  min-width: 5%;
`
