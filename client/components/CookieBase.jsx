import React, { useState, useEffect } from 'react'

function CookieBase() {
  const cookies = ['plain', 'shortbread', 'peanutbutter', 'chocolate']
  return (
    <div className='cookie-base'>
      {cookies.map((cookie) => {
        return (
          <img key={cookie} className='cookie' src={`/${cookie}.png`}></img>
        )
      })}
    </div>
  )
}

export default CookieBase
