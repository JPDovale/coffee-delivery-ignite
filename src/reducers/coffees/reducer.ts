import { produce } from 'immer'

import { Cart, Coffees, Payment } from '../../contexts/Coffee/types'
import { CoffeeActionsTypes } from './actions'

interface CoffeesState {
  coffees: Coffees[]
  cart: Cart
  requests: Payment[]
  values: {
    totalItems: number
    totalPrice: number
    delivery: number
  }
}

export function coffeesReducer(state: CoffeesState, action: any) {
  switch (action.type) {
    case CoffeeActionsTypes.addCoffeeToCart: {
      const coffeeToAddIndex = state.coffees.findIndex(
        (coffee) => coffee.id === action.payload.coffeeId,
      )

      return produce(state, (draft) => {
        draft.coffees[coffeeToAddIndex].countAddedToCart =
          draft.coffees[coffeeToAddIndex].countAddedToCart + 1
        draft.cart.coffeesRequired.push({
          id: Math.random(),
          coffee: draft.coffees[coffeeToAddIndex],
        })
        draft.values.totalItems =
          draft.values.totalItems + draft.coffees[coffeeToAddIndex].price
        draft.values.totalPrice =
          draft.values.totalItems + draft.values.delivery
      })
    }

    case CoffeeActionsTypes.removeCoffeeToCart: {
      const coffeeToRemoveIndex = state.coffees.findIndex(
        (coffee) => coffee.id === action.payload.coffeeId,
      )

      const coffeesThisTypeInCartIndex = state.cart.coffeesRequired.findIndex(
        (coffeeRequired) =>
          coffeeRequired.coffee.id === action.payload.coffeeId,
      )

      return produce(state, (draft) => {
        draft.coffees[coffeeToRemoveIndex].countAddedToCart =
          draft.coffees[coffeeToRemoveIndex].countAddedToCart > 0
            ? draft.coffees[coffeeToRemoveIndex].countAddedToCart - 1
            : 0
        if (coffeesThisTypeInCartIndex >= 0) {
          draft.cart.coffeesRequired.splice(coffeesThisTypeInCartIndex, 1)
        }
        draft.values.totalItems =
          draft.values.totalItems - draft.coffees[coffeeToRemoveIndex].price
        draft.values.totalPrice =
          draft.values.totalItems + draft.values.delivery

        if (draft.values.totalItems < 5) {
          draft.values.totalItems = 0
        }
      })
    }

    case CoffeeActionsTypes.removeAllCoffeesOneTypeOfCart: {
      const coffeeToEditIndex = state.coffees.findIndex(
        (coffee) => coffee.id === action.payload.coffeeId,
      )

      return produce(state, (draft) => {
        draft.coffees[coffeeToEditIndex].countAddedToCart = 0
        draft.cart.coffeesRequired = draft.cart.coffeesRequired.filter(
          (coffeeRequired) =>
            coffeeRequired.coffee.id !== action.payload.coffeeId,
        )

        let prices: number = 0

        for (let i = 0; i < draft.cart.coffeesRequired.length; i++) {
          prices = prices + draft.cart.coffeesRequired[i].coffee.price
        }

        draft.values.totalItems = prices
        draft.values.totalPrice = prices + draft.values.delivery
      })
    }

    case CoffeeActionsTypes.confirmPurchase: {
      return produce(state, (draft) => {
        draft.cart.address = action.payload.formData

        const newRequest: Payment = {
          aprove: true,
          coffees: draft.cart.coffeesRequired.map(
            (coffeeRequired) => coffeeRequired.coffee,
          ),
          method: action.payload.methodOfPayment,
          state: 'Há caminho',
          transition: Math.random(),
          address: action.payload.formData,
        }

        draft.requests = [newRequest, ...draft.requests]
        draft.cart.coffeesRequired = []
        draft.coffees = action.payload.resetCoffees
      })
    }

    case CoffeeActionsTypes.readValuesAnotherTime: {
      return produce(state, (draft) => {
        draft.cart = action.payload.cartRead
        draft.coffees = action.payload.coffeesRead
        draft.requests = action.payload.requestsRead

        let prices: number = 0

        for (let i = 0; i < draft.cart.coffeesRequired.length; i++) {
          prices = prices + draft.cart.coffeesRequired[i].coffee.price
        }

        draft.values.totalItems = prices
        draft.values.totalPrice = prices + draft.values.delivery
      })
    }

    default:
      return state
  }
}
