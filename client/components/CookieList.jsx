import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

function CookieList (props) {
  const cookies = props.cookie
  console.log(props.cookie)
  return (
    <aside>
      <h5 className="list-title">Cookie List</h5>
      {cookies.map((cookie) => {
        return (
          <div key={cookie} className='cookie'>
            <img src={`/${cookie.base}.png`}></img>
          </div>
        )
      })}
    </aside>
  )
}

function mapStateToProps (state) {
  return {
    cookie: state.cookie
  }
}

export default connect(mapStateToProps)(CookieList)
