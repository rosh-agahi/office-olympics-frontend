import React from 'react';
import {connect} from 'react-redux';
// import {pickChallenge} from '../actions/selectChallengePick'
import ThisChallenge from '../components/ThisChallenge'

class FocusChallenge extends React.Component {

  render() {

    const style = {
      display: "flex",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    }

    if (this.props.pick !== 0) {
      return (
        <div>
          <ThisChallenge challenge={this.props.challenge}/>
        </div>
      )
    }
    return (
      <div style={style}>
        <p>Add a New Challenge or select one from the list to begin.</p>
        <p>Good luck, contenders!</p>
      </div>
    )

  }

}

const mapStateToProps = state => {
  const p = state.pickReducer.pick;

  if (p !== 0) {
    return ({
      challenge: state.challengeReducer.challenges.filter(c=>c.id === state.pickReducer.pick)[0]
    })
  }
  return ({
    pick: p
  })

}

export default connect(mapStateToProps, { })(FocusChallenge)
