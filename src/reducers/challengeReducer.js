// handles updating parts of the store that has to do with challenge.
// a reducer take in state and action, it will update the reducer according to the action type
// a reducer is a function

export default function challengeReducer(state = {challenges: []}, action) {
  switch (action.type) {
    case 'FETCH_CHALLENGES':
      return {challenges: action.payload}
    case 'SUBMIT_CHALLENGE':
      return {
        ...state,
        challenges: [...state.challenges, action.payload]}
        // this saves the app from making an unnecessary fetch request, just adds the most recent challenge to the state without fetching.

    default:
      return state
  }
}

// this function returns an array of challenges.
// return from fetch
