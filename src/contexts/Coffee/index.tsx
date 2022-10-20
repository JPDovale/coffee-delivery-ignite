import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { createContext, useEffect, useReducer, useState } from 'react'
import {
  addCoffeeToCartAction,
  confirmPurchaseAction,
  readValuesAnotherTimeAction,
  removeAllCoffeesOneTypeOfCartAction,
  removeCoffeeToCartAction,
} from '../../reducers/coffees/actions'
import { coffeesReducer } from '../../reducers/coffees/reducer'
import { coffeesAvailable } from './CoffeesAvailable'

import { ICoffeeContext, CoffeeContextProps, Address } from './types'
import { useNavigate } from 'react-router-dom'

const initialValues: ICoffeeContext = {
  coffees: coffeesAvailable,
  cart: {
    coffeesRequired: [],
  },
  values: {
    delivery: 3.7,
    totalItems: 0,
    totalPrice: 0,
  },
  requests: [],

  newPurchase: {},
  purchaseMethod: '',
  setPurchaseMethod: () => {},

  addCoffeeToCart: () => {},
  removeCoffeeToCart: () => {},
  removeAllCoffeesOneTypeOfCart: () => {},
  confirmPurchase: () => {},
}

const newPurchaseFormValidationSchema = zod.object({
  cep: zod
    .string()
    .min(1, 'Campo obrigatório! Preencha para continuar')
    .max(100),
  city: zod
    .string()
    .min(1, 'Campo obrigatório! Preencha para continuar')
    .max(100),
  district: zod
    .string()
    .min(1, 'Campo obrigatório! Preencha para continuar')
    .max(100),
  number: zod
    .string()
    .min(1, 'Campo obrigatório! Preencha para continuar')
    .max(100),
  state: zod.string().min(1, 'Campo obrigatório! Preencha para continuar'),
  street: zod
    .string()
    .min(1, 'Campo obrigatório! Preencha para continuar')
    .max(100),
})

export const CoffeeContext = createContext<ICoffeeContext>(initialValues)

export function CoffeeProvider({ children }: CoffeeContextProps) {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  const [coffeesState, dispatch] = useReducer(coffeesReducer, {
    coffees: initialValues.coffees,
    cart: initialValues.cart,
    requests: initialValues.requests,
    values: initialValues.values,
  })

  useEffect(() => {
    const readCart = localStorage.getItem('@coffeeDelivery--Cart') || ''
    const readCoffees = localStorage.getItem('@coffeeDelivery--Coffees') || ''
    const readRequests = localStorage.getItem('@coffeeDelivery--Requests') || ''

    if (!readCart || !readCoffees || !readRequests) {
      setLoading(false)
      return
    }

    const cartJson = JSON.parse(readCart)
    const coffeesJson = JSON.parse(readCoffees)
    const requestsJson = JSON.parse(readRequests)

    dispatch(readValuesAnotherTimeAction(cartJson, coffeesJson, requestsJson))
    setLoading(false)
  }, [])

  const { coffees, cart, values, requests } = coffeesState

  const newPurchase = useForm<Address>({
    resolver: zodResolver(newPurchaseFormValidationSchema),
    defaultValues: {
      cep: cart.address?.cep,
      city: cart.address?.city,
      complement: cart.address?.complement,
      district: cart.address?.district,
      number: cart.address?.number,
      state: cart.address?.state,
      street: cart.address?.street,
    },
  })
  const [purchaseMethod, setPurchaseMethod] = useState(
    initialValues.purchaseMethod,
  )

  useEffect(() => {
    if (loading) return
    const cartToString = JSON.stringify(cart)
    localStorage.setItem('@coffeeDelivery--Cart', cartToString)
  }, [cart, loading])

  useEffect(() => {
    if (loading) return
    const coffeesToString = JSON.stringify(coffees)
    localStorage.setItem('@coffeeDelivery--Coffees', coffeesToString)
  }, [coffees, loading])

  useEffect(() => {
    if (loading) return
    const requestsToString = JSON.stringify(requests)
    localStorage.setItem('@coffeeDelivery--Requests', requestsToString)
  }, [requests, loading])

  function addCoffeeToCart(coffeeId: number) {
    dispatch(addCoffeeToCartAction(coffeeId))
  }

  function removeCoffeeToCart(coffeeId: number) {
    dispatch(removeCoffeeToCartAction(coffeeId))
  }

  function removeAllCoffeesOneTypeOfCart(coffeeId: number) {
    dispatch(removeAllCoffeesOneTypeOfCartAction(coffeeId))
  }

  async function confirmPurchase(data: Address) {
    if (!purchaseMethod) return
    if (!cart.coffeesRequired[0]) return

    dispatch(confirmPurchaseAction(data, purchaseMethod, initialValues.coffees))

    setTimeout(() => {
      navigate('/finished')
    }, 1000)
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffees,
        cart,
        values,
        requests,

        newPurchase,
        purchaseMethod,
        setPurchaseMethod,

        addCoffeeToCart,
        removeCoffeeToCart,
        removeAllCoffeesOneTypeOfCart,
        confirmPurchase,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
