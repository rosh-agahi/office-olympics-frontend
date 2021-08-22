// handles updating parts of the store that has to do with challenge.
// a reducer take in state and action, it will update the reducer according to the action type
// a reducer is a function

export default function challengeReducer(state = {challenges: []}, action) {
  switch (action.type) {
    case 'FETCH_CHALLENGES':
      return {challenges: action.payload}
    default:
      return state
  }
}

// this function returns an array of challenges.
// return from fetch
