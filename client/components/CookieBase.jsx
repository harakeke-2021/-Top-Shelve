import React, { useState, useEffect } from 'react'


function CookieBase (props) {
  const cookies = ['plain', 'shortbread', 'peanutbutter', 'chocolate']

  function clickHandler (cookie) {
    props.base(cookie)
    props.page('maker')
  }

  return (
    <main>
      <h1>Top Shelf Cookies</h1>
      <div className="cookie-base-container">
        {cookies.map((cookie) => {
          return (
            <img
              onClick={() => clickHandler(cookie)}
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
