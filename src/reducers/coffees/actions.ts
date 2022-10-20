import { Address, Cart, Coffees, Payment } from '../../contexts/Coffee/types'

/* eslint-disable no-unused-vars */
export enum CoffeeActionsTypes {
  addCoffeeToCart = 'addCoffeeToCart',
  removeCoffeeToCart = 'removeCoffeeToCart',
  removeAllCoffeesOneTypeOfCart = 'removeAllCoffeesOneTypeOfCart',
  confirmPurchase = 'confirmPurchase',
  readValuesAnotherTime = 'readValuesAnotherTime',
}

export function addCoffeeToCartAction(coffeeId: number) {
  return {
    type: CoffeeActionsTypes.addCoffeeToCart,
    payload: {
      coffeeId,
    },
  }
}

export function removeCoffeeToCartAction(coffeeId: number) {
  return {
    type: CoffeeActionsTypes.removeCoffeeToCart,
    payload: {
      coffeeId,
    },
  }
}

export function removeAllCoffeesOneTypeOfCartAction(coffeeId: number) {
  return {
    type: CoffeeActionsTypes.removeAllCoffeesOneTypeOfCart,
    payload: {
      coffeeId,
    },
  }
}

export function confirmPurchaseAction(
  formData: Address,
  methodOfPayment: 'card credit' | 'card debit' | 'money',
  resetCoffees: Coffees[],
) {
  return {
    type: CoffeeActionsTypes.confirmPurchase,
    payload: {
      formData,
      methodOfPayment,
      resetCoffees,
    },
  }
}

export function readValuesAnotherTimeAction(
  cartRead: Cart,
  coffeesRead: Coffees[],
  requestsRead: Payment[],
) {
  return {
    type: CoffeeActionsTypes.readValuesAnotherTime,
    payload: {
      cartRead,
      coffeesRead,
      requestsRead,
    },
  }
}
