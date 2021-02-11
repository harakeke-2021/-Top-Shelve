import { ADD_TO_SHELF } from '../actions/cookies'

const testcookies = [
  { base: 'plain', toppings: [] },
  { base: 'shortbread', toppings: [] },
]

function cookies(state = testcookies, action) {
  switch (action.type) {
    case ADD_TO_SHELF:
      return [
        ...state,
        {
          cookies: action.cookies,
        },
      ]

    default:
      return state
  }
}

export default cookies
