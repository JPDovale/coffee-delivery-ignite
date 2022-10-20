import { MapPinLine } from 'phosphor-react'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CoffeeContext } from '../../../../contexts/Coffee'

import {
  LgInput,
  AddressFormContainer,
  Form,
  FormContent,
  MdInput,
  SmInput,
} from './styles'

export function AddressForm() {
  const { confirmPurchase } = useContext(CoffeeContext)
  const { handleSubmit, register } = useFormContext()

  return (
    <AddressFormContainer>
      <span className="head">Complete seu pedido</span>
      <FormContent onSubmit={handleSubmit(confirmPurchase)}>
        <div className="infos">
          <MapPinLine size={22} />
          <div className="info">
            <p>Endereço de Entrega</p>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </div>
        <Form>
          <MdInput placeholder="CEP" {...register('cep')} />
          <LgInput placeholder="Rua" {...register('street')} />
          <div className="house">
            <MdInput placeholder="Número" {...register('number')} />
            <LgInput placeholder="Complemento" {...register('complement')} />
            <span>Opcional</span>
          </div>
          <div className="city">
            <MdInput placeholder="Bairro" {...register('district')} />
            <LgInput placeholder="Cidade" {...register('city')} />
            <SmInput placeholder="UF" max="2" {...register('state')} />
          </div>
        </Form>
      </FormContent>
    </AddressFormContainer>
  )
}
