import React from 'react'
import { Route, Link } from 'react-router-dom'

import CookieBase from './CookieBase'
import CookieList from './CookieList'
import CookieMaker from './CookieMaker'
import CssSetup from './CssSetup'

function App() {
  return (
    <>
      <CookieBase />
      <Route path={'/css'} component={CssSetup} />
      <CookieList />
    </>
  )
}

export default App
