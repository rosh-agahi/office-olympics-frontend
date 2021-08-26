export function submitChallenge(challengeData) {

  const headers = {
    method: "POST",
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify(challengeData)
  }

  return (dispatch) => {
    fetch("http://127.0.0.1:3000/api/v1/challenges", headers)
      .then(r => r.json())
      .then(challenge => dispatch({
        type: 'SUBMIT_CHALLENGE',
        payload: challenge
      }))
  }

}
