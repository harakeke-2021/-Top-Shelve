import React, { useState, useEffect } from 'react'

function CookieBase () {
  const cookies = ['plain', 'shortbread', 'peanutbutter', 'chocolate']
  const [selectedBase, setSelectedBase] = useState('')

  return (
    <main>
      <h1>Top Shelf Cookies</h1>
      <div className="cookie-base-container">
        {cookies.map((cookie) => {
          return (
            <img
              onClick={() => setSelectedBase(cookie)}
              key={cookie}
              className='cookie'
              src={`/${cookie}.png`}></img>
          )
        })}
        <button> Select cookie base!!!!</button>

      </div>
      
    </main>
  )
}

export default CookieBase
