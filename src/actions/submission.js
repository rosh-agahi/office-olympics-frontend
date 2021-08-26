export function newSubmission(submissionData, challenge_id) {
  const headers = {
    method: "POST",
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify(submissionData)
  }

  return (dispatch) => {
    fetch(`http://127.0.0.1:3000/api/v1/challenges/${challenge_id}/submissions`, headers)
      .then(r => r.json())
      .then(submissionData => dispatch({
        type: 'ADD_SUBMISSION',
        payload: submissionData
      }))
  }
}
