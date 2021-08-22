import React from 'react';
import {connect} from 'react-redux';
import {fetchChallenges} from '../actions/fetchChallenges'
import ThisChallenge from '../components/ThisChallenge'
import Submissions from '../components/Submissions'
// import '../header.css';
// import '../App.css'

class FocusChallenge extends React.Component {

  componentDidMount() {
    this.props.fetchChallenges()
  }

  render() {
    return (
      <div>
        <ThisChallenge />
        <Submissions />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    challenges: state.challenges
  }
}

export default connect(mapStateToProps, {fetchChallenges})(FocusChallenge);
