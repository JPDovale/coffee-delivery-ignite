import { useContext } from 'react'
import { CoffeeContext } from '../../../../contexts/Coffee'
import { Coffee } from './components/Coffee'

import { CoffeesAvailableContainer, CoffeesContainer } from './styles'

export function CoffeesAvailable() {
  const { coffees } = useContext(CoffeeContext)

  return (
    <CoffeesAvailableContainer>
      <h2>Nossos cafés</h2>
      <CoffeesContainer>
        {coffees.map((coffee) => {
          return <Coffee key={coffee.id} coffee={coffee} />
        })}
      </CoffeesContainer>
    </CoffeesAvailableContainer>
  )
}
