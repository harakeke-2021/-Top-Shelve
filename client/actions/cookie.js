export const INITIALIZE_COOKIE = 'INITIALIZE_COOKIE'
export const ADD_TOPPING = 'ADD_TOPPING'
export const REMOVE_TOPPING = 'REMOVE_TOPPING'

export function addTopping (topping) {
  return {
    type: ADD_TOPPING,
    topping

  }
}

export function removeTopping (topping) {
  return {
    type: REMOVE_TOPPING,
    topping
  }
}

export function initializeCookie (base) {
  return {
    type: INITIALIZE_COOKIE,
    base

  }
}
