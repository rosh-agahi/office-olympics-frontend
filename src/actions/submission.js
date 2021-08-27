export function newSubmission(submissionData, challenge_id) {
  const headers = {
    method: "POST",
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify(submissionData)
  }

  //always return dispatch because this is an async request
  return (dispatch) => {
    fetch(`http://127.0.0.1:3000/api/v1/challenges/${challenge_id}/submissions`, headers)
      .then(r => r.json())
      // when submission is saved, changed json response to send back it's updated challenge
      .then(challenge => dispatch({
        type: 'ADD_SUBMISSION',
        payload: challenge
      }))
  }
}
