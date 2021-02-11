export const ADD_TO_SHELF = 'ADD_TO_SHELF'

export function addToShelf (base, toppings) {
  return {
    type: ADD_TO_SHELF,
    base,
    toppings
  }
}
