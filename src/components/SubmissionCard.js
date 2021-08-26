import React from 'react';
import {connect} from 'react-redux';

const SubmissionCard = ({submission}) => {

    return (
      <div className="submissioncard">
        <div className="submissionInfo">
          <h4>Name:</h4>
            <p>{submission.name}</p>
          <h4>Submission Info:</h4>
            <p>{submission.text}</p>
        </div>

        <div className="vote">
        <button
          id={submission.id}
          // onClick{()=> console.log(submission.id)}
          >
          UpVote!
        </button>
        <p>Vote Tally: <strong>{submission.votes}</strong></p>
        </div>

      </div>
    )

}

export default SubmissionCard;
