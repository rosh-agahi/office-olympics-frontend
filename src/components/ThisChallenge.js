import React from 'react';
import Submissions from './Submissions'

const ThisChallenge = ({ challenge }) => {
    return (
    <div>
      <h2>{challenge.name}</h2>
      <p>Description</p>
      <p>{challenge.description}</p>
      <p>Rules of the Road</p>
      <p>{challenge.rules}</p>
      <div className="challengeButtons">
        <button>New Submission</button>
      </div>
      <div>
      //submissions
      <Submissions submissions={challenge.submissions} />
      </div>
    </div>
  )
}

export default ThisChallenge;
