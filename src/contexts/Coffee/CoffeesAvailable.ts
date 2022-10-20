import { Coffees } from './types'

import ExpressoSvg from '../../assets/coffees/Expresso.svg'
import AmericanoSvg from '../../assets/coffees/Americano.svg'
import ExpressoCremosoSvg from '../../assets/coffees/ExpressoCremoso.svg'
import GeladoSvg from '../../assets/coffees/Gelado.svg'
import CLeiteSvg from '../../assets/coffees/CLeite.svg'
import LatteSvg from '../../assets/coffees/Latte.svg'
import CapuccinoSvg from '../../assets/coffees/Capuccino.svg'
import MacchiatoSvg from '../../assets/coffees/Macchiato.svg'
import MochaccinoSvg from '../../assets/coffees/Mochaccino.svg'
import ChocolateQuenteSvg from '../../assets/coffees/ChocolateQuente.svg'
import CubanoSvg from '../../assets/coffees/Cubano.svg'
import HavaianoSvg from '../../assets/coffees/Havaiano.svg'
import ArabeSvg from '../../assets/coffees/Arabe.svg'
import IrlandesSvg from '../../assets/coffees/Irlandes.svg'

export const coffeesAvailable: Coffees[] = [
  {
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    id: 10,
    label: 'expresso',
    price: 9.9,
    tags: ['Tradicional'],
    img: ExpressoSvg,
    countAddedToCart: 0,
  },
  {
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    id: 11,
    label: 'expressoAmericano',
    price: 10.9,
    tags: ['Tradicional'],
    img: AmericanoSvg,
    countAddedToCart: 0,
  },
  {
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    id: 12,
    label: 'expressoCremoso',
    price: 10.9,
    tags: ['Tradicional'],
    img: ExpressoCremosoSvg,
    countAddedToCart: 0,
  },
  {
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    id: 13,
    label: 'expressoGelado',
    price: 12.9,
    tags: ['Tradicional', 'Gelado'],
    img: GeladoSvg,
    countAddedToCart: 0,
  },
  {
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    id: 14,
    label: 'cLeite',
    price: 10.9,
    tags: ['Tradicional', 'Com leite'],
    img: CLeiteSvg,
    countAddedToCart: 0,
  },
  {
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    id: 15,
    label: 'latte',
    price: 13.5,
    tags: ['Tradicional', 'Com leite'],
    img: LatteSvg,
    countAddedToCart: 0,
  },
  {
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    id: 16,
    label: 'capuccino',
    price: 12.3,
    tags: ['Tradicional', 'Com leite'],
    img: CapuccinoSvg,
    countAddedToCart: 0,
  },
  {
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    id: 17,
    label: 'macchiato',
    price: 15.9,
    tags: ['Tradicional', 'Com leite'],
    img: MacchiatoSvg,
    countAddedToCart: 0,
  },
  {
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    id: 18,
    label: 'mocaccino',
    price: 15.9,
    tags: ['Tradicional', 'Com leite'],
    img: MochaccinoSvg,
    countAddedToCart: 0,
  },
  {
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    id: 19,
    label: 'chocolateQuente',
    price: 9.9,
    tags: ['Especial', 'Com leite'],
    img: ChocolateQuenteSvg,
    countAddedToCart: 0,
  },
  {
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    id: 20,
    label: 'cubano',
    price: 11.5,
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    img: CubanoSvg,
    countAddedToCart: 0,
  },
  {
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    id: 21,
    label: 'havaiano',
    price: 11.5,
    tags: ['Especial'],
    img: HavaianoSvg,
    countAddedToCart: 0,
  },
  {
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    id: 22,
    label: 'arabe',
    price: 11.5,
    tags: ['Especial'],
    img: ArabeSvg,
    countAddedToCart: 0,
  },
  {
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    id: 23,
    label: 'irlandes',
    price: 11.5,
    tags: ['Especial', 'Alcoólico'],
    img: IrlandesSvg,
    countAddedToCart: 0,
  },
]
