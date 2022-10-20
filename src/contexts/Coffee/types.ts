import { ReactNode } from 'react'

export interface Coffees {
  title: string
  description: string
  tags: string[]
  img: string
  price: number
  id: number
  label: string
  countAddedToCart: number
}

export interface Address {
  cep: string
  street: string
  number: string
  complement?: string
  district: string
  city: string
  state: string
}

export interface Payment {
  transition: number
  method: 'card credit' | 'card debit' | 'money'
  aprove: boolean
  state:
    | 'Entregue'
    | 'Cancelado'
    | 'Pagamento não aprovado'
    | 'Produzindo'
    | 'Há caminho'
    | 'Recebedor ausente'
  coffees: Coffees[]
  address: Address
}

export interface CoffeesRequired {
  id: number
  coffee: Coffees
}

export interface Cart {
  address?: Address
  coffeesRequired: CoffeesRequired[]
  payment?: Payment
}

export interface ICoffeeContext {
  coffees: Coffees[]
  cart: Cart
  values: {
    totalItems: number
    totalPrice: number
    delivery: number
  }
  requests: Payment[]

  newPurchase: any
  purchaseMethod: 'card credit' | 'card debit' | 'money' | ''
  setPurchaseMethod: (
    newState: 'card credit' | 'card debit' | 'money' | '',
  ) => void

  addCoffeeToCart: (coffeeId: number) => void
  removeCoffeeToCart: (coffeeId: number) => void
  removeAllCoffeesOneTypeOfCart: (coffeeId: number) => void
  confirmPurchase: (data: any) => void
}

export interface CoffeeContextProps {
  children: ReactNode
}
