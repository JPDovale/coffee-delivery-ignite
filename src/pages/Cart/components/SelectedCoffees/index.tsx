import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useFormContext } from 'react-hook-form'

import { useContext } from 'react'
import { CoffeeContext } from '../../../../contexts/Coffee'
import { CoffeeInCart } from './components/Coffee'
import { FinishPrice, Selected, SelectedCoffersContainer } from './styles'

export function SelectedCoffees() {
  const { coffees, values, cart, confirmPurchase } = useContext(CoffeeContext)
  const { handleSubmit } = useFormContext()

  const totalPrice = values.totalPrice
  const [totalPriceReais, totalPriceRestCentavos] =
    String(totalPrice).split('.')
  const totalPriceCentavos = totalPriceRestCentavos
    ? totalPriceRestCentavos.length >= 3
      ? totalPriceRestCentavos.substring(0, 2)
      : totalPriceRestCentavos.padEnd(2, '0')
    : '00'

  const [totalItensReais, totalItemsRestCentavos] = String(
    values.totalItems,
  ).split('.')
  const totalItemsCentavos = totalItemsRestCentavos
    ? totalItemsRestCentavos.length >= 3
      ? totalItemsRestCentavos.substring(0, 2)
      : totalItemsRestCentavos.padEnd(2, '0')
    : '00'

  const [refCoffeesList] = useAutoAnimate<HTMLDivElement>()

  return (
    <SelectedCoffersContainer>
      <span className="head">Cafés selecionados</span>
      <Selected ref={refCoffeesList}>
        {coffees.map((coffee) => {
          if (coffee.countAddedToCart === 0) {
            return ''
          } else {
            return <CoffeeInCart key={coffee.title} coffee={coffee} />
          }
        })}
        <FinishPrice>
          <span className="item">
            <p>Total de itens</p>
            <p>
              R$ {totalItensReais === '0' ? '0' : totalItensReais}.
              {totalItemsCentavos}
            </p>
          </span>
          <span className="item">
            <p>Entrega</p>
            <p>R$ {cart.coffeesRequired.length <= 0 ? '0.00' : '3.70'}</p>
          </span>
          <p className="total">
            <span>Total</span>
            <span>
              R${' '}
              {cart.coffeesRequired.length <= 0 ? (
                '0.00'
              ) : (
                <>
                  {totalPriceReais}.{totalPriceCentavos}
                </>
              )}
            </span>
          </p>
          <button type="submit" onClick={handleSubmit(confirmPurchase)}>
            Confirmar pedido
          </button>
        </FinishPrice>
      </Selected>
    </SelectedCoffersContainer>
  )
}
