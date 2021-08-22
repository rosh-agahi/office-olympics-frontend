import React from 'react';
import {connect} from 'react-redux';
import Header from './components/Header'
import NewChallengeForm from './components/NewChallengeForm'
import ThisChallenge from './components/ThisChallenge'
import AllChallenges from './containers/AllChallenges'

import {fetchChallenges} from './actions/fetchChallenges'

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

const mapStateToProps = (state) => {
  //way of accessing values in our store as props
  return {
    challenges: state.challenges
  }
}
export default connect(
  //mapStateToProps,
  null,
  {fetchChallenges})(App);
// "connect" is how the redux store is connected to the fetch

//export default App
