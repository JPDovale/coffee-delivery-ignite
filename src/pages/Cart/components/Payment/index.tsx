import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeeContext } from '../../../../contexts/Coffee'

import {
  InfosContainer,
  Method,
  PaymentContainer,
  PaymentMethods,
} from './styles'

export function Payment() {
  const { setPurchaseMethod, purchaseMethod } = useContext(CoffeeContext)

  return (
    <PaymentContainer>
      <InfosContainer className="infos">
        <CurrencyDollar size={22} />
        <div className="info">
          <p>Pagamento</p>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </InfosContainer>
      <PaymentMethods>
        <Method
          onClick={() => setPurchaseMethod('card credit')}
          selected={purchaseMethod === 'card credit'}
        >
          <CreditCard size={16} />
          <span>Cartão de crédito</span>
        </Method>
        <Method
          onClick={() => setPurchaseMethod('card debit')}
          selected={purchaseMethod === 'card debit'}
        >
          <Bank size={16} />
          <span>Cartão de débito</span>
        </Method>
        <Method
          onClick={() => setPurchaseMethod('money')}
          selected={purchaseMethod === 'money'}
        >
          <Money size={16} />
          <span>Dinheiro</span>
        </Method>
      </PaymentMethods>
    </PaymentContainer>
  )
}
