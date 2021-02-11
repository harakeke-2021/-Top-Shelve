import { ADD_TO_SHELF } from '../actions/cookies'

function cookies (state = [], action) {
  switch (action.type) {
    case ADD_TO_SHELF:
      return [
        ...state,
        {
          cookies: action.cookies
        }
      ]

    default:
      return state
  }
}

export default cookies
