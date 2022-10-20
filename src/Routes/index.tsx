import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from '../layouts/DefaultLayout'

import { CartPage } from '../pages/Cart'
import { FinishedPage } from '../pages/Finished'
import { HomePage } from '../pages/Home'

interface AppRoutesProps {
  darkTheme: boolean
  setDarkTheme: (newState: boolean) => void
}

export function AppRoutes(props: AppRoutesProps) {
  const { darkTheme, setDarkTheme } = props

  return (
    <Routes>
      <Route
        path="/"
        element={
          <DefaultLayout darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        }
      >
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/finished" element={<FinishedPage />} />
      </Route>
    </Routes>
  )
}
