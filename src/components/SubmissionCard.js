import React from 'react';
import {connect} from 'react-redux';

const SubmissionCard = ({submission}) => {

    return (
      <div className="submissioncard">
        <div className="submissionleft">
          <h4>Name:</h4>
            <p>{submission.name}</p>
          <h4>Submission Info:</h4>
            <p>{submission.text}</p>
        </div>

        <div className="submissionmid">
          <iframe width="240" height="150"
            src={submission.videourl} title={submission.id}>
          </iframe>
        </div>

        <div className="vote">

          <p className="votetally">Vote Tally: <br />
            <strong>{submission.votes}</strong></p>

          <button
            id={submission.id}
            onClick={() => console.log(submission.id)}
            >
            UpVote!
          </button>
        </div>

      </div>
    )

}

export default SubmissionCard;
