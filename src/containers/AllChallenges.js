import React from 'react';
import ChallengeListCard from '../components/ChallengeListCard'

import {connect} from 'react-redux';


const AllChallenges = ({challenges}) => {
  return (
    <div>
      <h2>All Challenges</h2>
        <div className="list">
            {challenges.map(c => <ChallengeListCard key={c.id} challenge={c}/>) }
        </div>
    </div>
  )
}

const mapStateToProps = state => {
  return ({
    challenges: state.challengeReducer.challenges
  })
}

export default connect(mapStateToProps)(AllChallenges)
