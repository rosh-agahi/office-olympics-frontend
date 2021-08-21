// import logo from './logo.svg';
import React from 'react';
// import {connect} from 'react-redux';
import Header from './components/Header'
import ThisChallenge from './components/ThisChallenge'
import AllChallenges from './components/AllChallenges'

class App extends React.Component {

  // componentDidMount() {
  //   fetch('http://127.0.0.1:3000/api/v1/challenges', {
  //     method: 'GET'
  //   })
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // }

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
