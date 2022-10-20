import 'styled-components'
import { themeDefault } from '../style/Theme/DefaultTheme'

declare module 'styled-components' {
  type ThemeType = typeof themeDefault

  export interface DefaultTheme extends ThemeType { }
}
