import { ShoppingCart, Plus, Minus } from 'phosphor-react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CoffeeContext } from '../../../../../../contexts/Coffee'
import { Coffees } from '../../../../../../contexts/Coffee/types'
import {
  BuyCoffee,
  CoffeeContainer,
  CoffeePrice,
  CountCartCoffee,
  InfoCoffeeContainer,
  TagsContainer,
} from './styles'

interface CoffeeProps {
  coffee: Coffees
}

export function Coffee({ coffee }: CoffeeProps) {
  const [reais, centsWhitOneCharacter] = String(coffee.price).split('.')
  const centavos = centsWhitOneCharacter.padEnd(2, '0')

  const { addCoffeeToCart, removeCoffeeToCart } = useContext(CoffeeContext)

  return (
    <CoffeeContainer>
      <img src={coffee.img} alt="" />
      <TagsContainer>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </TagsContainer>
      <InfoCoffeeContainer>
        <p>{coffee.title}</p>
        <span>{coffee.description}</span>
      </InfoCoffeeContainer>
      <BuyCoffee>
        <CoffeePrice>
          <span>R$</span>
          <p>
            {reais}.{centavos}
          </p>
        </CoffeePrice>
        <CountCartCoffee>
          <div className="buttons">
            <button onClick={() => removeCoffeeToCart(coffee.id)}>
              <Minus size={14} weight="bold" />
            </button>
            <span>{coffee.countAddedToCart}</span>
            <button onClick={() => addCoffeeToCart(coffee.id)}>
              <Plus size={14} weight="bold" />
            </button>
          </div>
          <Link
            onClick={() => {
              if (coffee.countAddedToCart > 0) return
              addCoffeeToCart(coffee.id)
            }}
            to={'/cart'}
            className="icoCart"
          >
            <ShoppingCart size={22} weight="fill" />
          </Link>
        </CountCartCoffee>
      </BuyCoffee>
    </CoffeeContainer>
  )
}
