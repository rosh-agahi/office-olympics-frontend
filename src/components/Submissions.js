import React from 'react';
import SubmissionCard from './SubmissionCard'

const Submissions = ({submissions}) => {
  if (submissions.length === 0) {
    return (
      <div><br /><br />There are no submissions yet. Jump on it and add one!</div>
    )
  }
    return (
      <div>
        {submissions.map(s => <SubmissionCard key={s.id} submission={s}/>)}
      </div>
    )

}

export default Submissions;
