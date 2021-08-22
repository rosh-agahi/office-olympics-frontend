// import logo from './logo.svg';
import React from 'react';
// import {connect} from 'react-redux';
import Header from './components/Header'
import ThisChallenge from './components/ThisChallenge'
import AllChallenges from './components/AllChallenges'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="head"><Header /></div>
        <div className="page">
          <div className="left"><ThisChallenge /></div>
          <div className="allchallenges"><AllChallenges /></div>
        </div>
      </div>
    );
  }
}

// export default connect(mapStateToProps)(App);

export default App
