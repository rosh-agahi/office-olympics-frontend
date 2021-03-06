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
    case 'ADD_SUBMISSION':
      let challenge = state.challenges.map(c => {
       if (c.id === action.payload.id) {
         return action.payload
       } else {
         return c
       }
     })
      return {...state, challenges: challenge}
    case 'UPVOTE':
    let voted = state.challenges.map(c => {
     if (c.id === action.payload.id) {
       return action.payload
     } else {
       return c
     }
   })
    return {...state, challenges: voted}
    default:
      return state
  }
}

// this function returns an array of challenges.
// return from fetch
