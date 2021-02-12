import React, { useState } from 'react'
import { Route, Link } from 'react-router-dom'

import CookieBase from './CookieBase'
import CookieList from './CookieList'
import CookieMaker from './CookieMaker'
import CssSetup from './CssSetup'
import ChatBot from './ChatBot'

function App() {
  const [cookiePage, setCookiePage] = useState('base')
  const [selectedBase, setSelectedBase] = useState('')
  console.log(cookiePage)
  console.log(selectedBase)
  return (
    <>
      <Route path={'/css'} component={CssSetup} />
      <CookieList page={setCookiePage} />
      {cookiePage === 'maker' ? (
        <CookieMaker base={selectedBase} />
      ) : (
        <CookieBase page={setCookiePage} base={setSelectedBase} />
      )}
      <ChatBot />
    </>
  )
}

export default App
