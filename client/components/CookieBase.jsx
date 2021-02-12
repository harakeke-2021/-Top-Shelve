import React, { useState, useEffect } from 'react'

function CookieBase (props) {
  const cookies = ['plain', 'shortbread', 'peanutbutter', 'chocolate']

  function clickHandler (cookie) {
    props.base(cookie)
    props.page('maker')
  }

  return (
    <div className='cookie-base'>
      {cookies.map((cookie) => {
        return (
          <img
            onClick={() => clickHandler(cookie)}
            key={cookie}
            className='cookie'
            src={`/${cookie}.png`}></img>
        )
      })}
    </div>
  )
}

export default CookieBase
