const pickReducerDefaultState = {
 pick: 0
};

export default function pickReducer(state = pickReducerDefaultState, action) {
  switch (action.type) {
    case 'CHANGE_PICKED':
      return action.payload;
    default:
      return state;
  }
}
