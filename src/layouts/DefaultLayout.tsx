import { Outlet } from 'react-router-dom'

import { Header } from '../components/Header'

interface DefaultLayoutProps {
  darkTheme: boolean
  setDarkTheme: (newState: boolean) => void
}

export function DefaultLayout(props: DefaultLayoutProps) {
  const { darkTheme, setDarkTheme } = props

  return (
    <>
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Outlet />
    </>
  )
}
