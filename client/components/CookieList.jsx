import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

function CookieList(props) {
  const cookies = props.cookie
  console.log(props.cookie)
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
    cookie: state.cookie,
  }
}

export default connect(mapStateToProps)(CookieList)
