import { ADD_TO_SHELF } from '../actions/shelf'

function shelf (state = [], action) {
  switch (action.type) {
    case ADD_TO_SHELF:
      return [
        ...state,
        action.cookie
      ]

    default:
      return state
  }
}

export default shelf
