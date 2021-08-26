import React from 'react';
import {connect} from 'react-redux';
// import {pickChallenge} from '../actions/selectChallengePick'
import {fetchChallenges} from '../actions/fetchChallenges'
import ThisChallenge from '../components/ThisChallenge'
import {Route} from 'react-router-dom'

class FocusChallenge extends React.Component {

  render() {
      return (
        <div>
          <Route path='/challenges/:id' render={(routerProps) => <ThisChallenge {...routerProps} challenges={this.props.challenge}/>} />
        </div>
      )
  }

}

const mapStateToProps = state => {
    return ({
      challenge: state.challengeReducer.challenges
    })
  }

export default connect(mapStateToProps, { fetchChallenges })(FocusChallenge)
