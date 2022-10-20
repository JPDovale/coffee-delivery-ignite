import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

import {
  BannerContainer,
  ImgContent,
  InfosContainer,
  TitleContent,
  Infos,
  InfoContent,
} from './styles'

import BannerHomeSvg from '../../../../assets/banners/BannerHome.svg'

export function Banner() {
  return (
    <BannerContainer>
      <InfosContainer>
        <TitleContent>
          <h1 className="title">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
        </TitleContent>
        <Infos>
          <div className="infoGroup">
            <InfoContent color="#C47F17">
              <ShoppingCart className="icon" size={16} weight="fill" />
              <span>Compra simples e segura</span>
            </InfoContent>
            <InfoContent color="#DBAC2C">
              <Timer className="icon" size={16} weight="fill" />
              <span>Entrega rápida e rastreada</span>
            </InfoContent>
          </div>
          <div className="infoGroup">
            <InfoContent color="#403937">
              <Package className="icon" size={16} weight="fill" />
              <span>Embalagem mantém o café intacto</span>
            </InfoContent>

            <InfoContent color="#4B2995">
              <Coffee className="icon" size={16} weight="fill" />
              <span>O café chega fresquinho até você</span>
            </InfoContent>
          </div>
        </Infos>
      </InfosContainer>
      <ImgContent>
        <img src={BannerHomeSvg} alt="" />
      </ImgContent>
    </BannerContainer>
  )
}
