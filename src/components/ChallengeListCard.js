import React from 'react';
import {connect} from 'react-redux';

import {Route, Link} from 'react-router-dom'


const ChallengeListCard = ({challenge}) => {

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

export default connect(mapStateToProps)(ChallengeListCard);
