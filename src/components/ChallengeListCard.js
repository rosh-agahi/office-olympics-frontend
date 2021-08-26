import React from 'react';
import {connect} from 'react-redux';
import { pickChallenge } from '../actions/selectChallengePick'

import {Route, Link} from 'react-router-dom'


const ChallengeListCard = ({challenge, pickChallenge}) => {

    return (
      <div className="challengelistitem">
        <Link to={`/challenges/${challenge.id}`}
          id={challenge.id}
          className="challengelistitem">
            {challenge.name}
          </Link>
      </div>
    )

}

const mapStateToProps = state => {
  return ({
    challenges: state.challenges
  })
}

export default connect(mapStateToProps, { pickChallenge })(ChallengeListCard);
