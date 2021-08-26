import React from 'react';
import Submissions from './Submissions'
import NewSubmissionForm from './NewSubmissionForm'

const ThisChallenge = (props) => {

  let challenge = props.challenges[props.match.params.id - 1]

  // console.log(props.challenges[props.match.params.id - 1])

  return (
    <div>
      <h2>{challenge.name}</h2>
      <p><strong>Description</strong></p>
      <p className="ptext">{challenge.description}</p>
      <p><strong>Rules of the Road</strong></p>
      <p className="ptext">{challenge.rules}</p>

      <div>
        <NewSubmissionForm challenge={challenge.id}/>
      </div>

      <div>
        <Submissions submissions={challenge.submissions} />
      </div>
    </div>
  )
}

export default ThisChallenge;
