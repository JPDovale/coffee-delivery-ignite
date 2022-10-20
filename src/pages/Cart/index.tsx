import { useContext } from 'react'
import { FormProvider } from 'react-hook-form'
import { CoffeeContext } from '../../contexts/Coffee'

import { AddressForm } from './components/AddressForm'
import { Payment } from './components/Payment'
import { SelectedCoffees } from './components/SelectedCoffees'
import { CartContainer } from './styles'

export function CartPage() {
  const { newPurchase } = useContext(CoffeeContext)

  return (
    <CartContainer>
      <FormProvider {...newPurchase}>
        <div className="finishForms">
          <AddressForm />
          <Payment />
        </div>
        <SelectedCoffees />
      </FormProvider>
    </CartContainer>
  )
}
