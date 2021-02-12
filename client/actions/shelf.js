export const ADD_TO_SHELF = 'ADD_TO_SHELF'

export function addToShelf (cookie) {
  return {
    type: ADD_TO_SHELF,
    cookie
  }
}
