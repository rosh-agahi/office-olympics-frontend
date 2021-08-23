import React from 'react';
import {connect} from 'react-redux';
import ThisChallenge from '../components/ThisChallenge'
import Submissions from '../components/Submissions'

const FocusChallenge = ({challenges, picked}) => {
  return (
    <div>
      <ThisChallenge />
      <Submissions />
    </div>
  )
}

const mapStateToProps = state => {
  return ({
    challenges: state.challenges,
    picked: 0
  })
}

export default connect(mapStateToProps)(FocusChallenge)
