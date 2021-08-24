import React from 'react';
import SubmissionCard from './SubmissionCard'

const Submissions = ({submissions, }) => {
    return (
      <div>
        <span>Submissions: </span>
        <SubmissionCard />
        <SubmissionCard />


      </div>
    )

}

export default Submissions;
