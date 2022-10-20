import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'

import {
  FinishedContainer,
  InfoPurple,
  Infos,
  InfosFinished,
  InfoYellow,
  InfoYellowDark,
} from './styles'

import FinishSvg from '../../assets/banners/Finish.svg'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/Coffee'

export function FinishedPage() {
  const { requests } = useContext(CoffeeContext)

  return (
    <FinishedContainer>
      <InfosFinished>
        <h3>Uhu! Pedido confirmado</h3>
        <span>Agora é só aguardar que logo o café chegará até você</span>
        <Infos>
          <InfoPurple>
            <div className="ico">
              <MapPin weight="fill" />
            </div>
            <p className="currentInfo">
              Entrega em{' '}
              <strong>
                {requests[0].address?.street}, {requests[0].address?.number}
              </strong>
              <br />
              {requests[0].address?.district} - {requests[0].address?.city},{' '}
              {requests[0].address?.state}
            </p>
          </InfoPurple>
          <InfoYellow>
            <div className="ico">
              <Timer weight="fill" />
            </div>
            <p className="currentInfo">
              Previsão de entrega
              <br /> <strong> 20 min - 30 min</strong>
            </p>
          </InfoYellow>
          <InfoYellowDark>
            <div className="ico">
              <CurrencyDollar weight="fill" />
            </div>
            <p className="currentInfo">
              Pagamento na entrega <br />{' '}
              <strong>
                {requests[0].method === 'card credit'
                  ? 'Cartão de Crédito'
                  : requests[0].method === 'card debit'
                  ? 'Cartão de Débito'
                  : 'Dinheiro'}{' '}
              </strong>
            </p>
          </InfoYellowDark>
        </Infos>
      </InfosFinished>
      <img src={FinishSvg} alt="" />
    </FinishedContainer>
  )
}
