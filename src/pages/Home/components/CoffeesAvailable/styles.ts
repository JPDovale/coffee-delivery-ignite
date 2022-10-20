import styled from 'styled-components'

export const CoffeesAvailableContainer = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 2rem 10rem;

  h2 {
    font-size: ${({ theme }) => theme.FontSizes['4xl']};
    font-family: ${({ theme }) => theme.FontFamilys.header};
    font-weight: 900;
  }

  @media screen and (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`
export const CoffeesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem 2rem;

  margin-top: 3.375rem;
  width: 100%;
`
