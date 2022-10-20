import { MapPin, ShoppingCart, Sun, Moon } from 'phosphor-react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Link } from 'react-router-dom'

import {
  ButtonsContainer,
  Cart,
  ChangeTheme,
  HeaderContainer,
  Location,
  LogoContainer,
} from './style'
import { LogoComp } from '../../assets/logos/LogoComp'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/Coffee'

interface HeaderProps {
  darkTheme: boolean
  setDarkTheme: (newState: boolean) => void
}

export function Header(props: HeaderProps) {
  const [ref] = useAutoAnimate<HTMLDivElement>()
  const { darkTheme, setDarkTheme } = props

  const { cart } = useContext(CoffeeContext)

  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to="/">
          <LogoComp color={darkTheme ? '#f3f2f2' : '#403937'} />
        </Link>
      </LogoContainer>
      <ButtonsContainer>
        <Location>
          <MapPin size={22} className="ico" weight="fill" />
          <span>Curitiba, PR</span>
        </Location>
        <Cart ref={ref}>
          <Link className="cart" to="/cart" title="Cart">
            <ShoppingCart size={22} className="ico" weight="fill" />
          </Link>
          {cart.coffeesRequired[0] ? <p>{cart.coffeesRequired.length}</p> : ''}
        </Cart>
        <ChangeTheme onClick={() => setDarkTheme(!darkTheme)}>
          {darkTheme && <Sun weight="fill" size={22} />}
          {!darkTheme && <Moon weight="fill" size={22} />}
        </ChangeTheme>
      </ButtonsContainer>
    </HeaderContainer>
  )
}
