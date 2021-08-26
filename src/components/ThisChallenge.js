import React from 'react';
import Submissions from './Submissions'
import NewSubmissionForm from './NewSubmissionForm'
import NewSubmissionButton from './NewSubmissionButton'
import {Route, Link} from 'react-router-dom'

const ThisChallenge = (props) => {

  let challenge = props.challenges[props.match.params.id - 1]

  // console.log(props.challenges[props.match.params.id - 1])

  return (
    <div>
      <h2>{challenge.name}</h2>
      <p><strong>Description</strong></p>
      <p className="ptext">{challenge.description}</p>
      <p><strong>Rules of the Road</strong></p>
      <p className="ptext">{challenge.rules}</p>

      <div>
        <Route exact path={`/challenges/${challenge.id}`} render={() => <NewSubmissionButton challenge={challenge} />} />
        <Route path={`/challenges/${challenge.id}/submissions/new`} render={(routerProps) => <NewSubmissionForm {...routerProps} challenge={challenge.id}/>} />
      </div>

      <div>
        <Submissions submissions={challenge.submissions} />
      </div>
    </div>
  )
}

export default ThisChallenge;
