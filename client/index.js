import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { render } from 'react-dom'

// REDUX
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducers'
import App from './components/App'

const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,

    document.getElementById('app')
  )
})
