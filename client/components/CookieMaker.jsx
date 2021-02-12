import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
// import plain from './images/plain.png'

function CookieMaker () {
  const toppings = ['marshmallow', 'chocolatechip', 'nuts']

  return (
    <>
      <div className='cookie-maker'>Cookie Maker Component</div>
      <img href='/plain.png' />

      <table>
        <tr>
          {toppings.map(topping => {
            return (
              <td key={topping}>
                <img href={topping} />
              </td>
            )
          })}
        </tr>
      </table>
    </>
  )
}

export default connect()(CookieMaker)
