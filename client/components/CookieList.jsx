import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

function CookieList(props) {
  const cookies = props.cookies
  console.log(props.cookies)
  return (
    <div className='cookie-list'>
      <h5>Cookie List</h5>
      {cookies.map((cookie) => {
        return (
          <div key={cookie} className='cookie'>
            <img src={`/${cookie.base}.png`}></img>
          </div>
        )
      })}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    cookies: state.cookies,
  }
}

export default connect(mapStateToProps)(CookieList)
