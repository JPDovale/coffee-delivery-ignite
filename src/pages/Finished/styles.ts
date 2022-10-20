import styled from 'styled-components'

export const FinishedContainer = styled.main`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
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

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;

    padding: 0.5rem 1rem;

    img {
      width: 20rem;
    }
  }
`
export const InfosFinished = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;

  h3 {
    font-family: ${({ theme }) => theme.FontFamilys.header};
    font-weight: bold;
    font-size: ${({ theme }) => theme.FontSizes['4xl']};

    color: ${({ theme }) => theme.Colors.yellowDark};
  }

  span {
    font-size: ${({ theme }) => theme.FontSizes.md};
  }

  @media screen and (max-width: 768px) {
    width: 100%;

    padding-bottom: 5rem;
  }
`

export const Infos = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin-top: 2.5rem;
  padding: 2.5rem;

  border-radius: 6px 36px;
  background: ${({ theme }) => theme.Colors.background};
  transition: all 500ms;

  &::after {
    content: '';
    position: absolute;
    z-index: -1;

    top: -1px;
    left: -1px;
    bottom: -1px;
    right: -1px;

    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
    border-radius: 6px 36px;
  }
`

const BaseInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .ico {
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;

    border-radius: 50%;
    color: ${({ theme }) => theme.Colors.white};
  }

  .currentInfo {
    font-size: ${({ theme }) => theme.FontSizes.sm};
  }
`

export const InfoPurple = styled(BaseInfo)`
  .ico {
    background: ${({ theme }) => theme.Colors.purple};
  }
`

export const InfoYellow = styled(BaseInfo)`
  .ico {
    background: ${({ theme }) => theme.Colors.yellow};
  }
`

export const InfoYellowDark = styled(BaseInfo)`
  .ico {
    background: ${({ theme }) => theme.Colors.yellowDark};
  }
`
