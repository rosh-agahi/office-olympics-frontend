
export default function pickReducer(state = {picked: 0}, action) {
  switch (action.type) {
    case 'CHANGE_PICKED':
      return {picked: action.payload}
    default:
      return state
  }
}
