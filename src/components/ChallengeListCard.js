import React from 'react';
import {connect} from 'react-redux';
import {openChallenge} from '../actions/openChallenge'


const ChallengeListCard = ({challenge, }) => {

    return (
      <div className="challengelistitem">
        <button
          id={challenge.id}
          className="challengelistitem"
          onClick={()=> openChallenge(challenge)}>
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

export default connect(mapStateToProps, {  })(ChallengeListCard);
