import React from 'react';
import Submissions from './Submissions'
import NewSubmissionForm from './NewSubmissionForm'

const ThisChallenge = ({ challenge }) => {
    return (
    <div>
      <h2>{challenge.name}</h2>
      <p><strong>Description</strong></p>
      <p className="ptext">{challenge.description}</p>
      <p><strong>Rules of the Road</strong></p>
      <p className="ptext">{challenge.rules}</p>

      <div>
        <NewSubmissionForm />
      </div>

      <div>
        <Submissions submissions={challenge.submissions} />
      </div>
    </div>
  )
}

export default ThisChallenge;
