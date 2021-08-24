import React from 'react';
import Submissions from './Submissions'

const ThisChallenge = ({ challenge }) => {
    return (
    <div>
      <h2>{challenge.name}</h2>
      <p>----------------------Description----------------------</p>
      <p className="ptext">{challenge.description}</p>
      <p>-------------------Rules of the Road-------------------</p>
      <p className="ptext">{challenge.rules}</p>
      <div className="challengeButtons">
        <button>New Submission</button>
      </div>
      <div>
        <Submissions submissions={challenge.submissions} />
      </div>
    </div>
  )
}

export default ThisChallenge;
