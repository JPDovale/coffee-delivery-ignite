import { useEffect, useState } from 'react'

import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { CoffeeProvider } from './contexts/Coffee'
import { AppRoutes } from './Routes'
import { GlobalStyle } from './style/Global'
import { themeDark } from './style/Theme/DarkTheme'
import { themeDefault } from './style/Theme/DefaultTheme'

export function App() {
  const [darkTheme, setDarkTheme] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const darkThemeUsedAnotherTime =
      localStorage.getItem('@coffeeDelivery--DarkTheme') || 'false'
    const darkThemeJson = JSON.parse(darkThemeUsedAnotherTime)

    setDarkTheme(darkThemeJson)
    setLoading(false)
  }, [])

  useEffect(() => {
    if (loading) return
    const darkThemeToString = JSON.stringify(darkTheme)
    localStorage.setItem('@coffeeDelivery--DarkTheme', darkThemeToString)
  }, [darkTheme, loading])

  return (
    <ThemeProvider theme={darkTheme ? themeDark : themeDefault}>
      <GlobalStyle />

      <BrowserRouter>
        <CoffeeProvider>
          <AppRoutes darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        </CoffeeProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
