import React from 'react';
import {Route, Link} from 'react-router-dom'

const NewSubmissionButton = ({challenge}) => {

  return (
    <div>
      <br />
      <Link
        to={`/challenges/${challenge.id}/submissions/new`}
        className="button">
          New Submission
      </Link>
      <br />
    </div>
  )
}

export default NewSubmissionButton
