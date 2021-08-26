import React from 'react';
import SubmissionCard from './SubmissionCard'

const Submissions = ({submissions}) => {
    return (
      <div>

        {submissions.map(s => <SubmissionCard key={s.id} submission={s}/>)}

      </div>
    )

}

export default Submissions;
