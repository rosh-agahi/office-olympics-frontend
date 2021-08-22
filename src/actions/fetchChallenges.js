export function fetchChallenges() {

  return(dispatch) => {
    fetch('http://127.0.0.1:3000/api/v1/challenges')
    .then(response => response.json())
    .then(challenges => dispatch({
      type: 'FETCH_CHALLENGES',
      payload: challenges
    }))
  }
}
