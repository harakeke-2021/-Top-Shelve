import {
  INITIALIZE_COOKIE,
  ADD_TOPPING,
  REMOVE_TOPPING
} from '../actions/cookie'

const testData = [{ base: 'plain', toppings: [] }]

function cookie (state = testData, action) {
  switch (action.type) {
    case INITIALIZE_COOKIE:
      return {
        base: action.base,
        toppings: []
      }

    case ADD_TOPPING:
      return {
        base: state.base,
        toppings: state.toppings.push(action.topping)
      }

    case REMOVE_TOPPING:
      return {
        base: state.base,
        toppings: state.toppings.filter(
          (topping) => topping !== action.topping
        )
      }

    default:
      return state
  }
}

export default cookie
