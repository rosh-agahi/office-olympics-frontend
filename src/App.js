import React from 'react';
import Header from './components/Header'
import NewChallengeForm from './components/NewChallengeForm'
import FocusChallenge from './containers/FocusChallenge'
import AllChallenges from './containers/AllChallenges'


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="head"><Header /></div>
        <div className="page">
          <div className="left">
            <FocusChallenge />
          </div>
          <div className="allchallenges">
            <div className="newchallengeform"><NewChallengeForm /></div>
            <div><AllChallenges /></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App
