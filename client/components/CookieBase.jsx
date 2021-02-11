import React, { useState, useEffect } from 'react'

function CookieBase() {
  const cookies = ['plain', 'shortbread', 'peanutbutter', 'chocolate']
  const [selectedBase, setSelectedBase] = useState('')

  return (
    <div className='cookie-base'>
      {cookies.map((cookie) => {
        return (
          <img
            onClick={() => setSelectedBase(cookie)}
            key={cookie}
            className='cookie'
            src={`/${cookie}.png`}></img>
        )
      })}
    </div>
  )
}

export default CookieBase
