import React from 'react';
import {connect} from 'react-redux';
// import {pickChallenge} from '../actions/selectChallengePick'
import ThisChallenge from '../components/ThisChallenge'
import {Route, Switch} from 'react-router-dom'

class FocusChallenge extends React.Component {

  render() {

    const style = {
      display: "flex",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    }

    
      return (
        <div>
          <Route path='/challenges/:id' render={(routerProps) => <ThisChallenge {...routerProps} challenge={this.props.challenge}/>} />
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
