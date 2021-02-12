import React from 'react'
import { Route, Link } from 'react-router-dom'

import CookieBase from './CookieBase'
import CookieList from './CookieList'
import CookieMaker from './CookieMaker'
import CssSetup from './CssSetup'

function App () {
  return (
    <>
      {/* <Route exactPath={'/css'} component={CssSetup} /> */}

      <div className="container">
        
        <CookieList />
        <CookieBase />

      </div>
    </>
  )
}

export default App
