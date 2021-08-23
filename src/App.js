import React from 'react';
import Header from './components/Header'
import NewChallengeForm from './components/NewChallengeForm'
import FocusChallenge from './containers/FocusChallenge'
import AllChallenges from './containers/AllChallenges'

import {connect} from 'react-redux';
import {fetchChallenges} from './actions/fetchChallenges'


class App extends React.Component {

  componentDidMount() {
    this.props.fetchChallenges()
  }

  render() {
    if (this.props.challenges) {
      return (
        <div className="App">
          <div className="head"><Header /></div>
          <div className="page">
            <div className="left">
            </div>
            <div className="allchallenges">
              <div className="newchallengeform"><NewChallengeForm /></div>
              <div><AllChallenges challenges={this.props.challenges} /></div>
            </div>
          </div>
        </div>
      )
  }

    return (
        <div className="head"><Header /></div>
    )

  }
}

const mapStateToProps = state => {
  return ({
    challenges: state.challengeReducer.challenges,
    picked: 0
  })
}
// takes the state from the redux store and returns a challenges object

export default connect(mapStateToProps, { fetchChallenges,  })(App);
