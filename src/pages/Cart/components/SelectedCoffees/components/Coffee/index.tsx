import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeeContext } from '../../../../../../contexts/Coffee'

import { Coffees } from '../../../../../../contexts/Coffee/types'
import { Buttons, CoffeeInCartContainer, CoffeePrice, Count } from './styles'

interface CoffeeProps {
  coffee: Coffees
}

export function CoffeeInCart({ coffee }: CoffeeProps) {
  const [reais, centsWhitOneCharacter] = String(coffee.price).split('.')
  const centavos = centsWhitOneCharacter.padEnd(2, '0')

  const { addCoffeeToCart, removeCoffeeToCart, removeAllCoffeesOneTypeOfCart } =
    useContext(CoffeeContext)

  return (
    <CoffeeInCartContainer>
      <img src={coffee.img} alt="" />
      <Count>
        <span className="title">{coffee.title}</span>
        <div className="buttons">
          <Buttons>
            <button onClick={() => removeCoffeeToCart(coffee.id)}>
              <Minus size={14} weight="bold" />
            </button>
            <span>{coffee.countAddedToCart ? coffee.countAddedToCart : 0}</span>
            <button onClick={() => addCoffeeToCart(coffee.id)}>
              <Plus size={14} weight="bold" />
            </button>
          </Buttons>
          <button
            className="dell"
            onClick={() => removeAllCoffeesOneTypeOfCart(coffee.id)}
          >
            <Trash size={16} />
            <span>Remover</span>
          </button>
        </div>
      </Count>
      <CoffeePrice>
        <span>R$</span>
        <p>
          {reais}.{centavos}
        </p>
      </CoffeePrice>
    </CoffeeInCartContainer>
  )
}
