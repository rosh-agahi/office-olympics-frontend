import React from 'react';
import {connect} from 'react-redux';
// import {pickChallenge} from '../actions/selectChallengePick'
import {fetchChallenges} from '../actions/fetchChallenges'
import ThisChallenge from '../components/ThisChallenge'
import {Route, Redirect} from 'react-router-dom'

class FocusChallenge extends React.Component {

  render() {
    if (this.props.challenges.length !== 0) {
    return (
      <div>
        <Route path='/challenges/:id' render={(routerProps) =>
           <ThisChallenge {...routerProps} challenges={this.props.challenges}/>}
          />
      </div>
    )} else {
      return (<Redirect to="/" />) 
    }
  }

}

const mapStateToProps = state => {
    return ({
      challenges: state.challengeReducer.challenges
    })
  }

export default connect(mapStateToProps)(FocusChallenge)
