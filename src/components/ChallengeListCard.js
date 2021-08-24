import React from 'react';
import {connect} from 'react-redux';
import { pickChallenge } from '../actions/selectChallengePick'


const ChallengeListCard = ({challenge, pickChallenge}) => {

    return (
      <div className="challengelistitem">
        <button
          id={challenge.id}
          className="challengelistitem"
          onClick={()=> pickChallenge(challenge.id)}>
            {challenge.name}
          </button>
      </div>
    )

}

const mapStateToProps = state => {
  return ({
    challenges: state.challenges
  })
}

export default connect(mapStateToProps, { pickChallenge })(ChallengeListCard);
