import React from 'react';
import {connect} from 'react-redux';
import ThisChallenge from '../components/ThisChallenge'
import Submissions from '../components/Submissions'

const FocusChallenge = ({challenges}) => {
  return (
    <div>
      <ThisChallenge challenge={challenges[0]} />
      <Submissions />
    </div>
  )
}

const mapStateToProps = state => {
  return ({
    challenges: state.challenges
  })
}

export default connect(mapStateToProps)(FocusChallenge)
