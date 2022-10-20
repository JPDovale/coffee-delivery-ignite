import { Banner } from './components/Banner'
import { CoffeesAvailable } from './components/CoffeesAvailable'
import { HomeContainer } from './styles'

export function HomePage() {
  return (
    <HomeContainer>
      <Banner />
      <CoffeesAvailable />
    </HomeContainer>
  )
}
