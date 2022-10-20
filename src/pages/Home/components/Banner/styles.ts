import styled from 'styled-components'

import BackgroundPng from '../../../../assets/banners/Background.svg'

export const BannerContainer = styled.header`
  display: flex;
  align-items: center;
  gap: 3.5rem;

  padding: 5.75rem 10rem;
  background-image: url(${BackgroundPng});

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;

    padding: 0.5rem 1rem;
  }
`

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media screen and (max-width: 768px) {
    gap: 2rem;
  }
`

export const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    line-height: ${({ theme }) => theme.LineHeight.md};
    font-size: ${({ theme }) => theme.FontSizes['5xl']};
    font-family: ${({ theme }) => theme.FontFamilys.header}, cursive;

    color: ${({ theme }) => theme.Colors.baseTitle};
    transition: all 500ms;
    cursor: default;
  }

  span {
    font-size: ${({ theme }) => theme.FontSizes['2xl']};

    color: ${({ theme }) => theme.Colors.baseSubtitle};
    transition: all 500ms;
    cursor: default;
  }

  @media screen and (max-width: 768px) {
    gap: 0.5rem;

    h1 {
      font-size: ${({ theme }) => theme.FontSizes['3xl']};
    }

    span {
      font-size: ${({ theme }) => theme.FontSizes.lg};
    }
  }
`

export const Infos = styled.div`
  display: flex;
  gap: 2.5rem;

  .infoGroup {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1.25rem;
  }
`

interface InfoContentProps {
  color: string
}

export const InfoContent = styled.div<InfoContentProps>`
  display: flex;
  align-items: center;
  gap: 00.75rem;

  .icon {
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;

    border-radius: 100%;
    background: ${({ color }) => color};
    color: ${({ theme }) => theme.Colors.white};
  }

  span {
    font-size: ${({ theme }) => theme.FontSizes.md};
    color: ${({ theme }) => theme.Colors.baseText};
    transition: all 500ms;
    cursor: default;
  }
`

export const ImgContent = styled.div`
  display: flex;

  @media screen and (max-width: 1250px) {
    img {
      display: flex;
      width: 150%;
    }
  }

  @media screen and (max-width: 768px) {
    img {
      display: flex;
      width: 100%;
    }
  }
`
