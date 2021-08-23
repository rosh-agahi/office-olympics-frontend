import React from 'react';
import {connect} from 'react-redux';


const ChallengeListCard = ({challenge, }) => {

    return (
      <div className="challengelistitem">
        <button
          id={challenge.id}
          className="challengelistitem"
          onClick={()=> console.log(challenge.id)}>
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
