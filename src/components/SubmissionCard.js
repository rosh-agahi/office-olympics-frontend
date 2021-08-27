import React from 'react';
import Vote from './Vote'

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
          <Vote submission={submission} />
        </div>

      </div>
    )

}

export default SubmissionCard;
