export function upVote(voteData, submission_id) {
  const headers = {
    method: "PATCH",
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify(voteData)
  }

  //always return dispatch because this is an async request
  return (dispatch) => {
    fetch(`http://127.0.0.1:3000/api/v1/submissions/${submission_id}`, headers)
      .then(r => r.json())
      // when submission is saved, changed json response to send back it's updated challenge
      .then(challenge => dispatch({
        type: 'UPVOTE',
        payload: challenge
      }))
  }
}
