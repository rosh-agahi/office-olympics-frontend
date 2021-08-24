import React from 'react';
import {connect} from 'react-redux';
// import {pickChallengeSuccess} from '../actions/selectChallengePick'
import ThisChallenge from '../components/ThisChallenge'
import Submissions from '../components/Submissions'

class FocusChallenge extends React.Component {

  render() {

    if (this.props.p != 0) {
      return (
        <div>
          <ThisChallenge challenge={this.props.challenge}/>
          <Submissions />
        </div>
      )
    }
  }

}

const mapStateToProps = state => {
  const p = state.pickReducer.pick;

  if (p != 0) {
    return ({
      challenge: state.challengeReducer.challenges.filter(c=>c.id === parseInt(state.pickReducer.pick))
    })
  }
  return ({
    pick: p
  })

}

export default connect(mapStateToProps, { })(FocusChallenge)
